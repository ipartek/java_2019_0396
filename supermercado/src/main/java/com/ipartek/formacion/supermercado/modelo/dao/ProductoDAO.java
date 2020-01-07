package com.ipartek.formacion.supermercado.modelo.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;

import com.ipartek.formacion.supermercado.model.ConnectionManager;
import com.ipartek.formacion.supermercado.modelo.pojo.Producto;
import com.ipartek.formacion.supermercado.modelo.pojo.Usuario;

public class ProductoDAO implements IProductoDAO {

	private final static Logger LOG = Logger.getLogger(ProductoDAO.class);

	private static ProductoDAO INSTANCE;

	private static final String SQL_GET_ALL = "SELECT p.id 'id_producto', p.nombre 'nombre_producto', u.id 'id_usuario', u.nombre 'nombre_usuario' "
			+ " FROM producto p, usuario u " + " WHERE p.id_usuario = u.id " + " ORDER BY p.id DESC LIMIT 500;";

	private static final String SQL_GET_ALL_BY_USER = "SELECT p.id 'id_producto', p.nombre 'nombre_producto', u.id 'id_usuario', u.nombre 'nombre_usuario' "
			+ " FROM producto p, usuario u " + " WHERE p.id_usuario = u.id AND u.id = ? "
			+ " ORDER BY p.id DESC LIMIT 500;";

	private static final String SQL_GET_BY_ID = "SELECT p.id 'id_producto', p.nombre 'nombre_producto', u.id 'id_usuario', u.nombre 'nombre_usuario' "
			+ " FROM producto p, usuario u " + " WHERE p.id_usuario = u.id AND p.id= ? "
			+ " ORDER BY p.id DESC LIMIT 500;";

	private static final String SQL_GET_INSERT = "INSERT INTO `producto` (`nombre`, `id_usuario`) VALUES (?, ?);";
	private static final String SQL_GET_UPDATE = "UPDATE `producto` SET `nombre`= ? , `id_usuario`= ? WHERE `id`= ? ;";
	private static final String SQL_DELETE = "DELETE FROM producto WHERE id = ? ;";

	private ProductoDAO() {
		super();
	}

	public static synchronized ProductoDAO getInstance() {

		if (INSTANCE == null) {
			INSTANCE = new ProductoDAO();
		}

		return INSTANCE;
	}

	@Override
	public List<Producto> getAll() {

		ArrayList<Producto> lista = new ArrayList<Producto>();

		try (Connection con = ConnectionManager.getConnection();
				PreparedStatement pst = con.prepareStatement(SQL_GET_ALL);
				ResultSet rs = pst.executeQuery()) {

			while (rs.next()) {

				lista.add(mapper(rs));

			}

		} catch (SQLException e) {
			e.printStackTrace();
		}

		return lista;
	}

	public List<Producto> getAllByUser(int idUsuario) {

		ArrayList<Producto> lista = new ArrayList<Producto>();

		try (Connection con = ConnectionManager.getConnection();
				PreparedStatement pst = con.prepareStatement(SQL_GET_ALL_BY_USER);) {

			pst.setInt(1, idUsuario);
			LOG.debug(pst);

			try (ResultSet rs = pst.executeQuery()) {
				while (rs.next()) {
					lista.add(mapper(rs));
				}
			} // executeQuery

		} catch (SQLException e) {
			LOG.error(e);
		}

		return lista;
	}

	@Override
	public Producto getById(int id) {

		Producto p = null;

		try (Connection con = ConnectionManager.getConnection();
				PreparedStatement pst = con.prepareStatement(SQL_GET_BY_ID);) {

			// sustituyo parametros en la SQL, en este caso 1º ? por id
			pst.setInt(1, id);

			// ejecuto la consulta
			try (ResultSet rs = pst.executeQuery()) {

				while (rs.next()) {
					p = mapper(rs);
				}
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}

		return p;
	}

	@Override
	public Producto delete(int id) throws Exception {

		Producto registro = null;
		try (Connection con = ConnectionManager.getConnection();
				PreparedStatement pst = con.prepareStatement(SQL_DELETE)) {

			pst.setInt(1, id);

			registro = this.getById(id); // recuperar

			int affectedRows = pst.executeUpdate(); // eliminar
			if (affectedRows != 1) {
				registro = null;
				throw new Exception("No se puede eliminar " + registro);
			}

		}
		return registro;
	}

	@Override
	public Producto update(int id, Producto pojo) throws Exception {

		try (Connection con = ConnectionManager.getConnection();
				PreparedStatement pst = con.prepareStatement(SQL_GET_UPDATE)) {

			pst.setString(1, pojo.getNombre());
			pst.setInt(2, pojo.getUsuario().getId());
			pst.setInt(3, id);

			int affectedRows = pst.executeUpdate(); // lanza una excepcion si nombre repetido
			if (affectedRows == 1) {
				pojo.setId(id);
			} else {
				throw new Exception("No se encontro registro para id=" + id);
			}

		}
		return pojo;
	}

	@Override
	public Producto create(Producto pojo) throws Exception {

		try (Connection con = ConnectionManager.getConnection();
				PreparedStatement pst = con.prepareStatement(SQL_GET_INSERT, Statement.RETURN_GENERATED_KEYS)) {

			pst.setString(1, pojo.getNombre());
			pst.setInt(2, pojo.getUsuario().getId());

			int affectedRows = pst.executeUpdate();
			if (affectedRows == 1) {
				// conseguimos el ID que acabamos de crear
				ResultSet rs = pst.getGeneratedKeys();
				if (rs.next()) {
					pojo.setId(rs.getInt(1));
				}

			}

		}

		return pojo;
	}

	

	@Override
	public Producto getByIdByUser(int idProducto, int idUsuario) throws ProductoException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Producto updateByUser(int idProducto, int idUsuario, Producto pojo) throws ProductoException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Producto deleteByUser(int idProducto, int idUsuario) throws ProductoException {

		throw new ProductoException( ProductoException.EXCEPTION_UNAUTORIZED );
		
		//return null;
	}
	
	/**
	 * Utilidad para mapear un ResultSet a un Producto
	 * 
	 * @param rs
	 * @return
	 * @throws SQLException
	 */
	private Producto mapper(ResultSet rs) throws SQLException {

		Producto p = new Producto();
		p.setId(rs.getInt("id_producto"));
		p.setNombre(rs.getString("nombre_producto"));

		Usuario u = new Usuario();
		u.setId(rs.getInt("id_usuario"));
		u.setNombre(rs.getString("nombre_usuario"));
		p.setUsuario(u);

		return p;
	}

}

package com.ipartek.formacion.supermercado.modelo.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;

import com.ipartek.formacion.supermercado.model.ConnectionManager;
import com.ipartek.formacion.supermercado.modelo.pojo.Producto;
import com.ipartek.formacion.supermercado.modelo.pojo.Usuario;

public class UsuarioDAO implements IUsuarioDAO {

	private final static Logger LOG = Logger.getLogger(UsuarioDAO.class);

	private static final String SQL_EXIST = "SELECT id, nombre, contrasenia FROM usuario WHERE nombre = ? AND contrasenia = ?; ";
	private static final String SQL_GET_ALL = "SELECT id , nombre, contrasenia " + 
											  " FROM usuario " +											  											  
											  " ORDER BY id DESC LIMIT 500;";

	private static UsuarioDAO INSTANCE;

	private UsuarioDAO() {
		super();
	}

	public static synchronized UsuarioDAO getInstance() {

		if (INSTANCE == null) {
			INSTANCE = new UsuarioDAO();
		}

		return INSTANCE;
	}

	@Override
	public List<Usuario> getAll() {
		ArrayList<Usuario> lista = new ArrayList<Usuario>();

		try (Connection con = ConnectionManager.getConnection();
				PreparedStatement pst = con.prepareStatement(SQL_GET_ALL);
				ResultSet rs = pst.executeQuery()) {

			while (rs.next()) {
										
				lista.add( mapper(rs) );

			}

		} catch (SQLException e) {
			e.printStackTrace();
		}

		return lista;
	}

	@Override
	public Usuario getById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Usuario delete(int id) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Usuario update(int id, Usuario pojo) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Usuario create(Usuario pojo) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Usuario exist(String nombre, String contrasenia) {
		Usuario resul = null;

		try (Connection con = ConnectionManager.getConnection();
				PreparedStatement pst = con.prepareStatement(SQL_EXIST);) {

			pst.setString(1, nombre);
			pst.setString(2, contrasenia);
			LOG.debug(pst);

			try (ResultSet rs = pst.executeQuery()) {

				if (rs.next()) {
					// mapear del RS al POJO
					resul = new Usuario();
					resul.setId(rs.getInt("id"));
					resul.setNombre(rs.getString("nombre"));
					resul.setContrasenia(rs.getString("contrasenia"));
				}
			}

		} catch (Exception e) {
			LOG.error(e);
		}

		return resul;
	}
	
	
	private Usuario mapper(ResultSet rs) throws SQLException {
				
		Usuario u = new Usuario();
		u.setId(rs.getInt("id"));
		u.setNombre( rs.getString("nombre"));
		u.setContrasenia(rs.getString("contrasenia"));
		
		return u;
	}
	

}

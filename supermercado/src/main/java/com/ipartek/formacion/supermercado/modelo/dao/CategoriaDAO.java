package com.ipartek.formacion.supermercado.modelo.dao;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;

import com.ipartek.formacion.supermercado.model.ConnectionManager;
import com.ipartek.formacion.supermercado.modelo.pojo.Categoria;

public class CategoriaDAO implements ICategoriaDAO {

	private final static Logger LOG = Logger.getLogger(CategoriaDAO.class);

	private static CategoriaDAO INSTANCE;

	private CategoriaDAO() {
		super();
	}

	public static synchronized CategoriaDAO getInstance() {
		if (INSTANCE == null) {
			INSTANCE = new CategoriaDAO();
		}
		return INSTANCE;
	}

	@Override
	public List<Categoria> getAll() {
		LOG.trace("recuperar todas las categorias");
		List<Categoria> registros = new ArrayList<Categoria>();

		try (Connection con = ConnectionManager.getConnection();
				CallableStatement cs = con.prepareCall("{ CALL pa_categoria_getall() }");) {

			LOG.debug(cs);

			try (ResultSet rs = cs.executeQuery()) {
				// TODO mapper para vosotros
				while (rs.next()) {
					Categoria c = new Categoria();
					c.setId(rs.getInt("id"));
					c.setNombre(rs.getString("nombre"));
					registros.add(c);
				}
			}

		} catch (Exception e) {
			LOG.error(e);
		}

		return registros;
	}

	@Override
	public Categoria getById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Categoria delete(int id) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Categoria update(int id, Categoria pojo) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Categoria create(Categoria pojo) throws Exception {
		LOG.trace("insertar nueva categoria " + pojo );
		Categoria registro = pojo;
		
		try (Connection con = ConnectionManager.getConnection();
			 CallableStatement cs = con.prepareCall("{ CALL pa_categoria_insert(?,?) }");) {
			
			// parametro de entrada 1º?
			cs.setString(1, pojo.getNombre() );
			
			//registro el paremetro de salida 2º ?
			cs.registerOutParameter(2, java.sql.Types.INTEGER );
			
			LOG.debug(cs);
			
			//executamos el procedimiento almacenado executeUpdate, CUIDADO no es una SELECT => executeQuery	
			int affectedRows = cs.executeUpdate();
			LOG.debug("registros creados " + affectedRows);
			
			// una vez ejecutado, podemos recuperar el parametro de salida 2º ?			
			pojo.setId( cs.getInt(2) );
			
		}
		
		return registro;
	}

}

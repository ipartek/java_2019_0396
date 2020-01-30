package com.ipartek.formacion.model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.ipartek.formacion.model.pojo.Habilidad;
import com.ipartek.formacion.model.pojo.Pokemon;

public class PokemonDAO implements IDAO<Pokemon> {

	private static PokemonDAO INSTANCE;

	private PokemonDAO() {
		super();
	}

	public static synchronized PokemonDAO getInstance() {
		if (INSTANCE == null) {
			INSTANCE = new PokemonDAO();
		}
		return INSTANCE;
	}

	@Override
	public List<Pokemon> getAll() {

		String sql = " SELECT p.id 'id_pokemon', p.nombre 'nombre_pokemon', h.nombre 'nombre_habilidad', h.id 'id_habilidad' " + 
					 " FROM pokemon p, pokemon_habilidades ph, habilidad h " + 
					 " WHERE p.id = ph.id_pokemon AND ph.id_hablidad = h.id " + 
					 " ORDER BY p.id DESC LIMIT 500;";
		
		HashMap<Integer, Pokemon> hm = new HashMap<Integer, Pokemon>();
		
		try (Connection con = ConnectionManager.getConnection();
				PreparedStatement pst = con.prepareStatement(sql);
				ResultSet rs = pst.executeQuery() ) {
			
			while( rs.next() ) {
				
				int idPokemon = rs.getInt("id_pokemon");
				Pokemon p = hm.get(idPokemon);
				if ( p == null ) {
					p = new Pokemon();
					p.setId(idPokemon);
					p.setNombre(rs.getString("nombre_pokemon"));
				}
				
				Habilidad h = new Habilidad();
				h.setId(rs.getInt("id_habilidad"));
				h.setNombre(rs.getString("nombre_habilidad"));
				
				p.getHabilidades().add(h);
				
				hm.put(idPokemon, p);
			}
			

		} catch (Exception e) {
			// TODO: LOG
			e.printStackTrace();
		}

		return new ArrayList<Pokemon>(hm.values());
	}

	@Override
	public Pokemon getById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Pokemon delete(int id) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Pokemon update(int id, Pokemon pojo) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Pokemon create(Pokemon pojo) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

}

package com.ipartek.formacion.model;

import java.util.ArrayList;
import java.util.List;

import com.ipartek.formacion.model.pojo.Perro;

public class ArrayPerroDao implements IDAO<Perro> {
	
	private ArrayList<Perro> registros;
	private static int indice = 1;
	
	
	 private static ArrayPerroDao INSTANCE = null;
	 
	// capar para que no se pueda hacer new esta clase
	private ArrayPerroDao() {
		super();		
		registros = new ArrayList<Perro> ();
	}
	
	public synchronized static ArrayPerroDao getInstance() {
		
		if ( INSTANCE == null ) {
			INSTANCE = new ArrayPerroDao();
		} 
		 
		return INSTANCE;
		
	 }
	

	@Override
	public List<Perro> getAll() {		
		return registros;
	}

	@Override
	public Perro getById(int id) {
		
		Perro resul = null;
		
		for (Perro perro : registros) {
			
			if ( id == perro.getId() ) {
				resul = perro;
				break;
			}
			
		}
		
		return resul;
	}

	@Override
	public Perro delete(int id) throws Exception {
		
		Perro resul = null;		
		for (Perro perro : registros) {
			
			if ( id == perro.getId() ) {
				resul = perro;
				registros.remove(perro);
				break;
			}
			
		}
		
		if ( resul == null ) {
			throw new Exception("Perro no encontrado por su id " + id );
		}
		
		return resul;
	}

	@Override
	public Perro update(int id, Perro pojo) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Perro create(Perro pojo) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

}

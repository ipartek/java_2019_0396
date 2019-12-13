package com.ipartek.formacion.controller;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.ipartek.formacion.model.ArrayPerroDao;
import com.ipartek.formacion.model.pojo.Perro;

/**
 * Servlet implementation class PerrosController
 */
@WebServlet("/perros")
public class PerrosController extends HttpServlet {
	
	private final static Logger LOG = Logger.getLogger(PerrosController.class);
	private static final long serialVersionUID = 1L;
	private static ArrayPerroDao dao = ArrayPerroDao.getInstance(); 
	private String mensaje = "";
	
    
	@Override
	public void init(ServletConfig config) throws ServletException {
		
		LOG.trace("se ejecuta la 1º vez que se llama a este servlet y nunca mas");
		super.init(config);
		try {
			dao.create( new Perro("bubba") );
			dao.create( new Perro("rataplan") );
			dao.create( new Perro("mosca") );
			
		} catch (Exception e) {
			LOG.warn(e);		
		}
			
	}
	
	@Override
	public void destroy() {
		LOG.trace("se ejecuta solo una vez cuando se para el servidor de Aplicaciones");
		super.destroy();		
	}
	
	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		LOG.trace("se ejecuta antes del doGet o doPost");
		
		mensaje = "";
		
		super.service(request, response);   // ejecuta doGet o doPost
		
		LOG.trace("se ejecuta despues del doGet o doPost");
		
		request.setAttribute("mensaje", mensaje);
		request.setAttribute("perros", dao.getAll() );
		request.getRequestDispatcher("perros.jsp").forward(request, response);
		
		
	}
	
	

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		//listar perros
		LOG.trace("doGET");
		
		int id = (request.getParameter("id") == null) ? 0 : Integer.parseInt(request.getParameter("id")) ;
		boolean adoptar = (request.getParameter("adoptar") == null) ? false : true;
		boolean editar = ( request.getParameter("editar") == null) ? false : true;
		
		LOG.debug("id= " + id + " adoptar=" + adoptar + " editar="+ editar);
		
		if ( id > 0 ) {
			
			//buscar perro en array
			Perro perro = dao.getById(id);
			
			
			if( adoptar ) {							
				try {
					dao.delete(id);
					mensaje = "Ya has adoptado al perro, gracias";
				} catch (Exception e) {
					mensaje = "No se puede Eliminar el perro";
				}
				
			}
			
			if ( editar ) {
				
				try {
					dao.update(id, perro);
				} catch (Exception e) {
					mensaje = "No se puede Modificar el perro";
				}
				request.setAttribute("perroEditar", perro);
			}
			
			
		}else {
			LOG.trace("solo listar perros");
		}
		
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		LOG.trace("doPost");
		
		//recibir datos del form
		
		int id = Integer.parseInt( request.getParameter("id") );
		String nombre = request.getParameter("nombre");
		String imagen = request.getParameter("imagen");
		
		//TODO validar parametros
		
		if ( id > 0 ) {
			
			LOG.trace("Modificar el perro");
			Perro perro = new Perro();			
			perro.setNombre(nombre);
			perro.setFoto(imagen);
			
			try {
				dao.update(id, perro);
				mensaje = "Perro modificado con exito";
			} catch (Exception e) {
				mensaje = "No se puede modificar";
			}			
			
			
			
		}else {
			
			LOG.trace("Crear perro nuevo");
			
			//crear perro
			Perro p = new Perro();		
			p.setNombre(nombre);
			p.setFoto(imagen);
			try {
				dao.create(p);
				mensaje = "Gracias por dar de alta un nuevo perro";
				
			} catch (Exception e) {
				mensaje = "No se puede crear";
			}	
			
		}
				
	
		
		
	
	}

}


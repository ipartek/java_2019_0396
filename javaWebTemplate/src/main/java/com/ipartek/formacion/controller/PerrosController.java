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

import com.ipartek.formacion.model.pojo.Perro;

/**
 * Servlet implementation class PerrosController
 */
@WebServlet("/perros")
public class PerrosController extends HttpServlet {
	
	private final static Logger LOG = Logger.getLogger(PerrosController.class);
	private static final long serialVersionUID = 1L;
	 
	
    private ArrayList<Perro> perros = new ArrayList<Perro>();

	
    
	@Override
	public void init(ServletConfig config) throws ServletException {
		
		LOG.trace("se ejecuta la 1º vez que se llama a este servlet y nunca mas");
		super.init(config);
		perros.add( new Perro("bubba") );
		perros.add( new Perro("rataplan") );
		perros.add( new Perro("mosca") );
		perros.add( new Perro("txakur") );
		perros.add( new Perro("lagun") );		
	}
	
	@Override
	public void destroy() {
		LOG.trace("se ejecuta solo una vez cuando se para el servidor de Aplicaciones");
		super.destroy();		
		perros = null;
	}
	
	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		LOG.trace("se ejecuta antes del doGet o doPost");
		
		super.service(request, response);   // ejecuta doGet o doPost
		
		LOG.trace("se ejecuta despues del doGet o doPost");
		
		request.setAttribute("perros", perros);
		request.getRequestDispatcher("perros.jsp").forward(request, response);
		
		
	}
	
	

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		//listar perros
		LOG.trace("doGET");
		
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		LOG.trace("doPost");
		
		//recibir datos del form
		
		String nombre = request.getParameter("nombre");
		
				
		//crear perro
		Perro p = new Perro();
		p.setNombre(nombre);
		
		//guardar en lista
		perros.add(p);
		
		
	
	}

}

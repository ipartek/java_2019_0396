package com.ipartek.formacion.supermercado.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.google.gson.Gson;
import com.ipartek.formacion.supermercado.modelo.dao.ProductoDAO;
import com.ipartek.formacion.supermercado.modelo.pojo.Producto;
import com.ipartek.formacion.supermercado.pojo.ResponseMensaje;
import com.ipartek.formacion.supermercado.utils.Utilidades;


/**
 * Servlet implementation class ProductoRestController
 */
@WebServlet( { "/producto/*" } )
public class ProductoRestController extends HttpServlet {
	
	
	private static final long serialVersionUID = 1L;
	private final static Logger LOG = Logger.getLogger(ProductoRestController.class);
	private ProductoDAO productoDao;
	private String pathInfo;
	private int statusCode;
	

	/**
	 * @see Servlet#init(ServletConfig)
	 */
	public void init(ServletConfig config) throws ServletException {
		productoDao = ProductoDAO.getInstance();
	}

	/**
	 * @see Servlet#destroy()
	 */
	public void destroy() {
		productoDao = null;
	}

	/**
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		// prepara la response		
		response.setContentType("application/json"); 
		response.setCharacterEncoding("utf-8");
		
		pathInfo = request.getPathInfo();		
		LOG.debug("mirar pathInfo:" + pathInfo + " para saber si es listado o detalle" );
		
		super.service(request, response);   // llama a doGEt, doPost, doPut, doDelete
		
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		LOG.trace("peticion GET");
		Object reponseBody = null;
		
		try {
			int id = Utilidades.obtenerId(pathInfo);
			if ( id != -1 ) {							// DETALLE
				
				reponseBody = productoDao.getById(id);
				if ( null != reponseBody ) {
					statusCode = HttpServletResponse.SC_OK;
				}else {
					statusCode = HttpServletResponse.SC_NOT_FOUND;
				}
				
			}else {										// LISTADO
				//obtener productos de la BD
				reponseBody = (ArrayList<Producto>) productoDao.getAll();
				if (  ((ArrayList<Producto>)reponseBody).isEmpty()  ) {
					
					statusCode = HttpServletResponse.SC_NO_CONTENT;
				}else {
					statusCode = HttpServletResponse.SC_OK;
				}
			}			
			
		}catch (Exception e) {			
			// response status code
			reponseBody = new ResponseMensaje(e.getMessage());			
			statusCode = HttpServletResponse.SC_BAD_REQUEST;
			
		} finally  {
			
			response.setStatus( statusCode );
			// response body
			PrintWriter out = response.getWriter();		               // out se encarga de poder escribir datos en el body
			String jsonResponseBody = new Gson().toJson(reponseBody);		   // conversion de Java a Json
			out.print(jsonResponseBody.toString()); 	
			out.flush();       
		}	
		
		
		
		
		
		
		
		                                        // termina de escribir datos en response body
		
		
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		LOG.debug("POST crear recurso");
		
		// convertir json del request body a Objeto
		BufferedReader reader = request.getReader();               
		Gson gson = new Gson();
		Producto producto = gson.fromJson(reader, Producto.class);
		
		//TODO validar objeto
		
		LOG.debug(" Json convertido a Objeto: " + producto);
		
		
		response.setStatus( HttpServletResponse.SC_NOT_IMPLEMENTED );
		
		PrintWriter out = response.getWriter();		              
		String jsonResponseBody = new Gson().toJson( new ResponseMensaje("A pikar kodigo"));		  
		out.print(jsonResponseBody.toString()); 	
		out.flush();   
		
		
		
	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		LOG.debug("PUT modificar recurso");
		response.setStatus( HttpServletResponse.SC_NOT_IMPLEMENTED );
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		LOG.debug("DELETE eliminar recurso");
		response.setStatus( HttpServletResponse.SC_NOT_IMPLEMENTED );
	}

}

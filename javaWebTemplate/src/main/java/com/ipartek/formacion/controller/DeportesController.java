package com.ipartek.formacion.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

/**
 * Servlet implementation class DeportesController
 */
@WebServlet("/deportes")
public class DeportesController extends HttpServlet {
	
	private static final long serialVersionUID = 1L;
	private final static Logger LOG = Logger.getLogger(DeportesController.class);
       

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doProcess(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doProcess(request, response);
	}

	private void doProcess(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		
		String nombre = request.getParameter("nombre");
		String sexo = request.getParameter("sexo");		
		String deportes[] = request.getParameterValues("deportes");
		
		
		try {
			
		
				
			//comprobar que menos 3 deportes
			if ( deportes != null && deportes.length >= 3 ) {  // comprobacion correcta
				
				HashMap<String, String> hmDeportes = (HashMap<String, String>)request.getServletContext().getAttribute("deportes");
				ArrayList<String> deportesSeleccionados = new ArrayList<String>();
				for (String deporteKey : deportes) {					
					deportesSeleccionados.add( hmDeportes.get(deporteKey) );
				}			
				
				request.setAttribute("deportesSeleccionados", deportesSeleccionados);	
				request.setAttribute("nombre", nombre);
				request.setAttribute("sexo", sexo);	
				request.getRequestDispatcher("deportes-resumen.jsp").forward(request, response);
				
			}else {                                            // < 3 deportes
				
				request.setAttribute("nombre", nombre);
				request.setAttribute("deportesMarcados", Arrays.toString(deportes) );
				request.setAttribute("mensaje", "Selecciona almenos 3 deportes");
				request.setAttribute("sexo", sexo);
				request.getRequestDispatcher("formulario-deportes.jsp").forward(request, response);
				
			}
		
		}catch (Exception e) {
			LOG.error(e);
			request.getRequestDispatcher("error.jsp").forward(request, response);
			

		}
		
		
	}
	
	

}

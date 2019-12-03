package com.ipartek.formacion.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class ConversorController
 */
@WebServlet("/convertir")
public class ConversorController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ConversorController() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		// siempre en formato String los parametros
		
		String metros = request.getParameter("metros");
		
				
		// logica negocio
		
		if ( "".equals(metros) ) {
			
			request.setAttribute("mensaje", "Por favor dime los metros" );
			
		}else {
					
			// enviar atributos a la JSP
			request.setAttribute("metros", metros );
			request.setAttribute("resultado", 999f );
		}
		
		
		// ir a la JSP o vista
		request.getRequestDispatcher("ejercicios/jsp/conversor.jsp").forward(request, response);
		
		
	}

}

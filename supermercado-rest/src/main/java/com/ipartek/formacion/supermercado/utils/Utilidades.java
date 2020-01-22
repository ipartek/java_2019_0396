package com.ipartek.formacion.supermercado.utils;

public class Utilidades {
	
	/**
	 * obtenemos el id del pathInfo o uri
	 * @param pathInfo partte de la URI donde debemos buscar un numero
	 * @return numero id
	 * @throws Exception si el pathinfo esta mal formado
	 * 
	 * ejemplos:
	 * 	<ol>
	 * 		<li>/ pathinfo valido</li>
	 *     <li> /2 pathinfo valido</li>
	 *     <li> /2/ pathinfo valido</li>
	 *     <li> /2/2 url pathinfo esta mal formado</li>
	 *     <li> /2/otracosa/34/ pathinfo esta mal formado</li>
	 * </ol>
	 * 
	 */
	public static int obtenerId(String pathInfo ) throws Exception {
		
		//throw new Exception("Sin implementar, primero Test!!!!");
		return -1;
	}

}

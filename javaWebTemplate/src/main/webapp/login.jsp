
<p>Indicamos una una directiva, que en caso de error tiene que ir a la pagian de error indicada</p>
<code>page errorPage="error.jsp"</code>

<%@ page errorPage="error.jsp" %>

<%

    // descomentar estas lineas para que lance un error
	// Object o = null;
	// o.toString();	
%>


<h1>Login</h1>


<%	
	

	//atributo
	String mensaje = (String)request.getAttribute("mensaje");
	
	//si no viene como atributo, intentamos de la request
	if ( mensaje == null ){
		mensaje = request.getParameter("mensaje");
	}


	if ( mensaje != null ){
		%>
			<p style="color:red"><%=mensaje%></p>
		<% 
	}

%>

<form action="login" method="post">

	<input type="text" name="usuario" placeholder="Nombre usuario" required>
	<br>
	<input type="password" name="contrasena" placeholder="Contraseña" required>
	<br>
	<select name="idioma">
		<option value="es">Castellano</option>
		<option value="eu" selected>Euskera</option>
		<option value="en">Ingles</option>
	</select>
	<br>
	Recuerdame
	<input type="checkbox" name="recuerdame" value="1" />
	<br>

	<input type="submit" value="Acceder" />

</form>
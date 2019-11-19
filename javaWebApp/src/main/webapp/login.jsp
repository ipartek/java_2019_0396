<h1>Login</h1>

<%
	String mensaje = (String)request.getAttribute("mensaje");
	if ( mensaje != null ){
		%>
			<p style="color:red"><%=mensaje%></p>
		<% 
	}

%>

<form action="login" method="post">

	<input type="text" name="usuario" placeholder="Nombre usuario" required>

	<input type="submit" value="Acceder" />

</form>
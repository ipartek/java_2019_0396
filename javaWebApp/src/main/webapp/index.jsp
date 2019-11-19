<% String titulo = "WebApp"; %>

<%@include file="includes/cabecera.jsp" %>
<%@include file="includes/navegacion.jsp" %>

<main>
	<%
		// java 
		out.print("<p>esto es JAVA</p>");
	
	%>
	
	<a href="login.jsp">Login</a>
	
	<a href="calculadora.jsp">Calculadora</a>
	
	
	<a href="kaixo?nombre=pepe">Saludar a Pepe</a>
	<a href="kaixo?nombre=Maria">Saludar a Maria Antoñeta</a>

</main>

<%@include file="includes/pie.jsp" %>	
<h1>Resultado</h1>

<%
	//recibir atributos del controlador
	String mensaje = (String)request.getAttribute("mensaje");	
	String op1 = (String)request.getAttribute("op1");
	String op2 = (String)request.getAttribute("op2");
	int resultado = (int)request.getAttribute("resultado");
	
	
	if (mensaje != null) {
%>

	<p style="color:red;"><%=mensaje%></p>

<% }else { %>

	<p>El resultado es de sumar <%=op1%> mas <%=op2%> es igual a <%=resultado%></p>

<% } // final del if %>	

<a href="calculadora.jsp">Volver a Calcular</a>
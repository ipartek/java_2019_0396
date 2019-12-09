
<%@page import="com.ipartek.formacion.model.pojo.Perro"%>
<%@page import="java.util.ArrayList"%>

<%@include file="includes/header.jsp" %>
<%@include file="includes/navigation.jsp" %>

<%
	String mensaje = (String)request.getAttribute("mensaje");
%>

<p style="color:teal; font-size:2em;"><%=mensaje%></p>




<h1>Perros</h1>


<%
	
	ArrayList<Perro> perros = (ArrayList<Perro>)request.getAttribute("perros");

%>

listado

<ul>
	<% for ( Perro p :  perros ){ %>
	
		<li>
			<%=p.getId()%> - <%=p.getNombre()%> 
			<img src="<%=p.getFoto()%>" style="width:100px; height: 100px;" alt="foto alterntiva del perro">
			<a href="perros?id=<%=p.getId()%>&adoptar=s">Adoptar</a>
			<a href="perros?id=<%=p.getId()%>&editar=s">Modificar</a>
		</li>
		
	<% } %>
</ul>

<hr>

formulario

<%
	Perro perroEditar = (Perro)request.getAttribute("perroEditar");
	if ( perroEditar == null ){
		perroEditar = new Perro();
	}
%>

<form action="perros" method="post">
	
	<input type="text" readonly name="id" required value="<%=perroEditar.getId()%>">
	<br>
		
	<input type="text" name="nombre" placeholder="nombre del bicho" value="<%=perroEditar.getNombre()%>" required>	
	<br>
	
	<input type="text" name="imagen" placeholder="url de la imagen" value="<%=perroEditar.getFoto()%>" required>
	<br>
	
	<input type="submit" value="Dar de Alta">
</form>


<%@include file="includes/footer.jsp" %>
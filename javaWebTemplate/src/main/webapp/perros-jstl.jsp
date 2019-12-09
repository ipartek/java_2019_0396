<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>


<h1>Perros JSTL</h1>
<p>Mismo ejemplo para hacer un CRUD pero usando taglibs y EL </p>

<c:if test="${not empty mensaje}">
	<p style="color:teal; font-size:2em;">${mensaje}</p>
</c:if>

<c:if test="${empty mensaje}">
	<p>No tenemos ningun mensaje</p>
</c:if>

<h2>Tenemos ${fn:length(perros)} perros en Adopción</h2>

<ul>
	<c:forEach items="${perros}" var="p">
		<li>
			${p.id} ${p.nombre}
			<img src="${p.foto}" style="width:100px; height: 100px;" alt="foto alterntiva del perro">
			<a href="perros2?id=${p.id}&editar=s">Modificar</a>
			<a href="perros2?id=${p.id}&eliminar=s">XXXX</a>
		</li>
	</c:forEach>
</ul>


<c:if test="${empty perroEditar}">
	No tenemos perro para Editar, vamos a inicializarlo
	<jsp:useBean id="perroEditar" class="com.ipartek.formacion.model.pojo.Perro"></jsp:useBean>
	
</c:if>

<br>
id=> ${perroEditar.id}
<br>
nombre=> ${perroEditar.nombre}
<br>
foto=> ${perroEditar.foto}
<br>







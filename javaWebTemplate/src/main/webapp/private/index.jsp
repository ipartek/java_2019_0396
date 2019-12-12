<%@include file="../includes/header.jsp" %>
<%@include file="../includes/navigation.jsp" %>


<meta http-equiv="refresh" content="5">

<p>Estoy en el Backkoffice</p>
<p style="color:red">Solo pueden acceder usuarios logeados</p>
<p>atributo desde servlet => ${atributoDesdeServelet}</p>


<p>Usuarios Logeados <b>${applicationScope.numeroUsuariosConectados}</b> </p>
<p>Numero de Intentos de Acceso Indebidos <b>${applicationScope.numeroUsuariosIndebidos}</b> </p>

<ol>
	<h3>IPs sin repetir de accesos indebidos</h3>
	<c:forEach items="${applicationScope.ips}" var="ip">
		<li>${ip}</li>
	</c:forEach>
</ol>
	


<%@include file="../includes/footer.jsp" %>
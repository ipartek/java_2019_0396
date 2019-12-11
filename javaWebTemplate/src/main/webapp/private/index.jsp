<%@include file="../includes/header.jsp" %>
<%@include file="../includes/navigation.jsp" %>

<p>Estoy en el Backkoffice</p>
<p style="color:red">Solo pueden acceder usuarios logeados</p>
<p>atributo desde servlet => ${atributoDesdeServelet}</p>


<p>Usuarios Logeados <b>X</b> </p>
<p>Numero de Intentos de Acceso Indebidos <b>X</b> </p>
<ol>
	<h3>IPs sin repetir de accesos indebidos</h3>
	<li>192.x.x.x</li>
	<li>192.x.x.x</li>
	<li>192.x.x.x</li>
</ol>


<%@include file="../includes/footer.jsp" %>
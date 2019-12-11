<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
	<base href="${pageContext.request.contextPath}/" />
</head>
<body>
	


	
	<p>* acordaros de poner en la BASE contextPath= <b>${pageContext.request.contextPath}</b></p>
	
	<hr>
	HEAD
	
	<c:if test="${not empty usuarioLogeado}" >
		<p>usuario logeado: <b>${usuarioLogeado}</b></p>
		<p><a href="logout">Cerrar Session</a></p>
	</c:if>
	
	
	<c:if test="${empty usuarioLogeado}" >
		<a href="login.jsp">Login</a>
	</c:if>



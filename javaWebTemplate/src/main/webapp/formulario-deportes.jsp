<%@include file="includes/header.jsp" %>
<%@include file="includes/navigation.jsp" %>


<h1>Formulario Deportes</h1>


<c:if test="${not empty mensaje}">
	<h4 style="color:red">${mensaje}</h4>
</c:if>

<form action="deportes" method="post">

	<input type="text" name="nombre" value="${nombre}" placeholder="Dime tu nombre">
	<br>
	
	
	<select name="sexo">
	    <option value="">-- selecciona -- </option>
		<option value="h" ${ ( sexo eq 'h'  )?"selected":"" }>Hombre</option>
		<option value="m" ${ ( sexo eq 'm'  )?"selected":"" }>Mujer</option>
		<option value="i" ${ ( (sexo eq 'i') or ( empty sexo)  )?"selected":"" }>Indefinido</option>
	</select>
	
	<br>
	
	<c:forEach items="${applicationScope.deportes}" var="dep">	
		<input type="checkbox" ${( fn:contains(deportesMarcados, dep.key) )?"checked":""} name="deportes" value="${dep.key}"> ${dep.value}<br>
	</c:forEach>
	
	<input type="submit" value="Registrar">

</form>



<%@include file="includes/footer.jsp" %>
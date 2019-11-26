<% String titulo = "HelloWeb | @media"; %>

<%@include file="/includes/cabecera.jsp" %>
<%@include file="/includes/navegacion.jsp" %>


	<h1>Media Querys</h1>
	
	<section>
		<p>Una media query consiste en un tipo de medio y al menos una consulta que limita las hojas de estilo utilizando características del medio como ancho, alto y color. Se entiende como un módulo CSS3 que permite adaptar la representación del contenido a características del dispositivo. Añadido en CSS3, las media queries dejan que la presentación del contenido se adapte a un rango específico de dispositivos de salida sin tener que cambiar el contenido en sí.</p>		
	</section>
	
	
	<style>
	
		/* tablet */
		@media screen and (max-width: 768px) and ( min-width: 425px ) {
			section {
					background-color: purple;
			}
			
			h1{
				color: purple;
			}
		}
		
		/* mobil */
		@media screen and (max-width: 425px) {
			
			
			section {
				background-color: pink;
			}
			
			h1{
				color: pink;
			}
			
		} 
		
		
		
	</style>
	
	
<%@include file="/includes/pie.jsp" %>	
import { Component } from '@angular/core';


/**
 * componente principal que se carga al arrancar la App
 * 
 * selector: nombre de la etiqueta para inyectar componente en HTML
 * templateUrl: Vista del HTML
 * styleUrls: estilos para la vista formato scss
 * 
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //variable
  title = 'Angular App';
  productos = [{
		'id': 34,
		'nombre': 'cafe',
		'glutten': false,
		'precio': 1.46,
		'categoria': {
			'id': 1,
			'nombre': 'bebidas'
		},
		'historico': [{
				'fecha': '17/01/2020',
				'precio': 1.45
			},
			{
				'fecha': '01/12/2019',
				'precio': 1.40
			},
			{
				'fecha': '25/11/2019',
				'precio': 1.20
			}
		]
	},
	{	
		'id': 1,
		'nombre': 'leche',
		'glutten': false,
		'precio': 3.56,
		'categoria': {
			'id': 1,
			'nombre': 'bebidas'
		},
		'historico': [{
				'fecha': '17/01/2020',
				'precio': 3.45
			},
			{
				'fecha': '01/12/2019',
				'precio': 2.45
			},
			{
				'fecha': '25/11/2019',
				'precio': 3.00
			}
		]
	},
	{
		'id': 4,
		'nombre': 'galletas',
		'glutten': true,
		'precio': 4.6,
		'categoria': {
			'id': 1,
			'nombre': 'dulces'
		},
		'historico': [{
				'fecha': '17/01/2020',
				'precio': 4.5
			},
			{
				'fecha': '01/12/2019',
				'precio': 3.99
			},
			{
				'fecha': '25/11/2019',
				'precio': 4.09
			}
		]
	}
];

pSeleccionado = this.productos[0];

  // funciones

  selecionarProducto = function( producto ) {
    console.debug('hemos hecho click %o ', producto );
    this.pSeleccionado = producto;
  };

}

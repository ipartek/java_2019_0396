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
  

}

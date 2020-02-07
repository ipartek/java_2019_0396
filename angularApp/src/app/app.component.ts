import { Component } from '@angular/core';
import { GLOBAL } from './global';


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

  title: string;
  const: any;


  constructor() {
    console.trace('AppComponent constructor');
    // incializan las variables
    this.title = 'Angular App';
    this.const = GLOBAL;

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnInit {

  //declarar variables  nombre: tipo
  numero: number;

  constructor() { 
    console.trace('BotonComponent constructor');
    // incializan las variables
    this.numero = 0;

  }

  ngOnInit() {
    console.trace('BotonComponent ngOnInit');
  }

  // funciones


}

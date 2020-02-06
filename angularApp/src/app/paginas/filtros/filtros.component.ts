import { Component, OnInit } from '@angular/core';
import { ANIMALES } from '../../animales';


@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {

  coche: any;
  animales: Array<any>;
  tipos: Array<string>;
  tipo: string;

  constructor() {
    console.trace('FiltrosComponent constructor');
    this.animales = ANIMALES;
    this.tipo = 'TODOS';
    this.tipos = [...new Set (this.animales.map( (el) => el.Tipo ))];
    this.coche = {
                    'nombre': 'Audi r8',
                    'color': 'blanco',
                    'isDiesel': false,
                    'precio': 100000.456
                  };

  }// constructor

  ngOnInit() {
    console.trace('FiltrosComponent ngOnInit');
  }// ngOnInit

}// FiltrosComponent

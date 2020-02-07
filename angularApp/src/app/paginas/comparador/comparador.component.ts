import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comparador',
  templateUrl: './comparador.component.html',
  styleUrls: ['./comparador.component.scss']
})
export class ComparadorComponent implements OnInit {

  coches: Array<any>;
  c1: any;
  c2: any;

  constructor() {

    this.coches = [
      {
        'nombre': 'chicuechento',
        'precio': 3000
      },
      {
        'nombre': 'renault megan',
        'precio': 3500
      },
      {
        'nombre': 'ferrari',
        'precio': 80000
      }
    ];
    this.c1 = this.coches[0];
    this.c2 = this.coches[1];


  }

  ngOnInit() {
  }

  seleciconar( cocheSeleccionado: any) {
    console.debug('click cocheSeleccionado', cocheSeleccionado);    
    this.c2 = this.c1;
    this.c1 = cocheSeleccionado;
  }

}

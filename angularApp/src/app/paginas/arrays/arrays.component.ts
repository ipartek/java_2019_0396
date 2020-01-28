import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.scss']
})
export class ArraysComponent implements OnInit {

  frutas: any;
  total: number;
  totalDescuento: number;
  aSoloNombres: Array<string>;
  frutasConDescuento: Array<string>;
  frutasAmarillasNombre: Array<string>;
  frutasAmarillasPrecio: number;
  fruta1verde: any;
  colores: Array<string>;

  constructor() {
    console.trace('ArraysComponent constructor');


    var numbers = [1, 5, 10, 15];
    var doubles = numbers.filter((el, index, lista ) => { return el > 5; } );
    console.debug('--------------------------------------------------------');
    console.debug(numbers);
    console.debug(doubles);
    console.debug('--------------------------------------------------------');

    this.total = 0;
    this.totalDescuento = 0;
    this.frutasConDescuento = [];
    this.aSoloNombres = [];
    this.frutasAmarillasNombre = [];
    this.frutasAmarillasPrecio = 0;
    this.fruta1verde = {};
    this.colores =  [];



    this.frutas = [
      {'nombre': 'fresa', 'precio': 2.45, 'descuento': 0, 'colores': ['roja'] },
      {'nombre': 'pera', 'precio': 3.50, 'descuento': 10, 'colores': ['amarillo', 'verde']},
      {'nombre': 'manzana', 'precio': 1.99, 'descuento': 50, 'colores': ['amarillo', 'verde', 'roja']}
    ];
  }

  ngOnInit() {
    console.trace('ArraysComponent ngOnInit');

    // this.frutas.forEach( el => this.total += el.precio );

    // modo extendido para poder depurar
    this.total = this.frutas.map( el => {
            console.debug( el );
            return el.precio;
        }).reduce( (previous, current, index, array) => {
          console.debug( previous, current, index, array );
          return previous + current;
        });


    // modo reducido
    this.aSoloNombres = this.frutas.map( el => el.nombre );
    this.total = this.frutas.map( el => el.precio ).reduce( (p, c) => c + p);
    this.totalDescuento = this.frutas.reduce( (p, c) => ( p + ( c.precio - ((c.precio * c.descuento) / 100) ) ), 0);

    console.debug('--------------------------------------------------------');
    this.frutasConDescuento = this.frutas.filter( el => el.descuento > 0 ).map( el => el.nombre);
    console.debug(this.frutasConDescuento);
    console.debug('--------------------------------------------------------');

    this.frutasAmarillasNombre = this.frutas.filter( el => el.colores.includes('amarillo') ).map( el => el.nombre);
    this.frutasAmarillasPrecio = this.frutas.filter( el => el.colores.indexOf('amarillo') !== -1 ).reduce( (p, c) => p + c.precio , 0);
    this.fruta1verde = this.frutas.find( el => el.colores.indexOf('verde') !== -1 );
    this.colores = this.frutas.reduce( (p, c, i, a) => {
        return p.concat(c.colores);
    }, [] ).filter( (el, index, array) => {
        console.debug(el, index, array);
        return array.indexOf(el) === index;
      });
  }

}

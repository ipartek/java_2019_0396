import { Component, OnInit } from '@angular/core';

const TIEMPO_JUEGO = 4000;

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent implements OnInit {

  jugador: string;
  totalClicks: number;
  ranking: Map<string, number>;
  isActivo: boolean;

  constructor() {
    console.trace('JuegoComponent constructor');
    this.jugador = '';
    this.totalClicks = 0;
    this.ranking = new Map();
    this.isActivo = false;

    /*
    this.ranking.set('pepe', 100);
    this.ranking.set('pepa', 3200);
    this.ranking.set('iñigo', 1100);
    */

  }// constructor

  ngOnInit() {
      console.trace('JuegoComponent ngOnInit');

  } // ngOnInit


  comenzar(): void {
    console.trace('comenzar');
    this.isActivo = true;

    setTimeout( () => {
      console.debug('Termina timeout');
      this.ranking.set( this.jugador , this.totalClicks );
      this.isActivo = false;
      this.totalClicks = 0;
      this.jugador = '';

    }, TIEMPO_JUEGO);


  }// comenzar

  sumar(): void {
    console.trace('sumar');
    this.totalClicks++;

  }// sumar


}// JuegoComponent

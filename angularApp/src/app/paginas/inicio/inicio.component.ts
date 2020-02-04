import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  titulo: string;
  numeroClicks: number;
  visible: boolean;
  jugador: string;

  constructor( private pokemonService: PokemonService ) {
    console.trace('InicioComponent constructor');
    this.titulo = 'Weelcome 2 Hell';
    this.numeroClicks = 0;
    this.visible = false;
    this.jugador = '';

  }// constructor

  ngOnInit() {
    console.trace('InicioComponent ngOnInit');

  }// ngOnInit


  contarClicks() {
    console.trace('contarClicks ' + this.jugador);
    this.numeroClicks++;

  }// contarClicks



  decirAdios() {
    console.trace('decirAdios');
    this.visible = true;

  }// decirAdios


} // InicioComponent

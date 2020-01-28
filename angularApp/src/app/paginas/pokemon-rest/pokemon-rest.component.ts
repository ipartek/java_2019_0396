import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../model/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-rest',
  templateUrl: './pokemon-rest.component.html',
  styleUrls: ['./pokemon-rest.component.scss']
})
export class PokemonRestComponent implements OnInit {

  pokemon: Pokemon;
 

  constructor( private pokemonService: PokemonService) {

    console.trace('PokemonRestComponent constructor');
    this.pokemon = new Pokemon('pikachu');
   // this.pokemon.nombre = '';  // setter
    console.debug(this.pokemon);

  }

  ngOnInit() {
    console.trace('PokemonRestComponent ngOnInit');

    //llamadas a los servicios

    // a un Observable nos tenmos que suscribir
    // cuando llamamos a un Obervable tenemos 3 posibles metodos
    // solo 1 es obligatorio

    this.pokemonService.getPokemon( 'pikachu' ).subscribe(
      data => {
        console.debug('peticion correcta data %o', data);
        // mapear de Jon a Pokemon

      },
      error => {
        console.warn('peticion ERRONEA data %o', error);
      },
      () => {
        console.trace('esto se hace siempre');
      }
    );



  }

}

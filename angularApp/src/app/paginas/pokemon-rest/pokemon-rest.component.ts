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
  mensaje: string;

  constructor( private pokemonService: PokemonService) {

    console.trace('PokemonRestComponent constructor');
    this.mensaje = '';
    this.pokemon = new Pokemon('');
   // this.pokemon.nombre = '';  // setter
    console.debug(this.pokemon);

  }

  ngOnInit() {
    console.trace('PokemonRestComponent ngOnInit');

    // llamadas a los servicios

    // a un Observable nos tenmos que suscribir
    // cuando llamamos a un Obervable tenemos 3 posibles metodos
    // solo 1 es obligatorio

    this.pokemonService.getPokemon( 'pikachu' ).subscribe(
      data => {
        console.debug('peticion correcta data %o', data);
        // mapear de Jon a Pokemon
        this.pokemon.id = data.id;
        this.pokemon.nombre = data.name;
        this.pokemon.imagen = data.sprites.front_default;

        const habilidadesNames = data.abilities.map( el => el.ability.name );
        console.debug('habilidades en ingles %o', habilidadesNames);

        habilidadesNames.forEach( habilidad => {
            // conseguir su habilidad en castellano
            this.pokemonService.getHabilidad( habilidad ).subscribe(
              json => {
                console.debug('habilidad %o' ,  json);
                const habilidadCastellano = json.names.find( el => el.language.name === 'es' );
                console.debug('recupera habiliada en castellano %o', habilidadCastellano);
                this.pokemon.habilidades.push( habilidadCastellano.name );
            });


        });

        this.mensaje = 'Pokemon cargado desde https://pokeapi.co';

      },
      error => {
        console.warn('peticion ERRONEA data %o', error);
        this.mensaje = 'No existe pokemon X';
      },
      () => {
        console.trace('esto se hace siempre');
      }
    );



  }

}

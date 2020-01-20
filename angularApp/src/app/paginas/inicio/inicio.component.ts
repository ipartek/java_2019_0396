import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  pokemon: any;

  constructor( private pokemonService: PokemonService ) {

    console.trace('InicioComponent constructor');
    this.pokemon = {};

  }

  ngOnInit() {
    console.trace('InicioComponent ngOnInit');

    this.pokemonService.getPokemon().subscribe( data => {
      console.debug(data);
      this.pokemon = data;
    });

  }

}

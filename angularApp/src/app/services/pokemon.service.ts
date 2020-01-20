import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor( private http: HttpClient ) {
     console.trace('PokemonService constructor');
  }


  getPokemon() {
    const url = 'https://pokeapi.co/api/v2/pokemon/1/';
    console.trace('PokemonService getPokemon ' + url);
    return this.http.get(url);
  }



}

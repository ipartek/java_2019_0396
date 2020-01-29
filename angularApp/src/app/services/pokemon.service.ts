import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IPokemonService } from './IPokemonService';


@Injectable({
  providedIn: 'root'
})
export class PokemonService implements IPokemonService {


  constructor( private http: HttpClient ) {
     console.trace('PokemonService constructor');
  }


  getPokemon( nombre: string ): Observable<any> {
    const url = `https://pokeapi.co/api/v2/pokemon/${nombre}/`;
    console.trace('PokemonService getPokemon ' + url);
    return this.http.get(url);
  }

  getHabilidad( nombreHabilidad : number): Observable<any> {
    const url = `https://pokeapi.co/api/v2/ability/${nombreHabilidad}/`;
    console.trace('PokemonService getHabilidad ' + url);
    return this.http.get(url);
  }


}
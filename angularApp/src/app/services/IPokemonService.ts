import { Observable } from "rxjs";

export interface IPokemonService {

    /**
     * Recuperamos los datos en JSON de un Pokemon por su nombre
     * @param nombre: string nombre del pokemon a buscar
     * @see GET /api/v2/pokemon/{nombre}/
     */
    getPokemon( nombre: string): Observable<any>;

    /**
     * recupera un json con las habilidades de un Pokemon
     * @param id: number identificador del pokemon
     * @see GET /api/v2/ability/{id}/
     */
    getHabilidad( id: number): Observable<any>;

}

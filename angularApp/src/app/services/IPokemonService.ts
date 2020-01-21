interface IPokemonService {

    getAll();

    getById( idPokemon: number );

    getByName( nombre: string );

}

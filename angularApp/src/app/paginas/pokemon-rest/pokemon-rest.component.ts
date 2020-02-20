import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../model/pokemon';
import { PokemonService } from '../../services/pokemon.service';
import { FormsModule, FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-pokemon-rest',
  templateUrl: './pokemon-rest.component.html',
  styleUrls: ['./pokemon-rest.component.scss']
})
export class PokemonRestComponent implements OnInit {

  pokemon: Pokemon;
  mensaje: string;
  habilidades: Array<any>;
  formulario: FormGroup;
  formHabilidades: FormArray;


  options = [
    {nombre: 'impasible', id: '1', checked: false},
    {nombre: 'rayos', id: '2', checked: false},
    {nombre: 'oloroso', id: '3', checked: false}
  ];

  // map habilidades del serviucio rest a options para checks
  /* this.habilidades.map ( el => {
                                    nombre: el.nombre,
                                    id: el.id,
                                    checked: false
                                  });
  */


  constructor( private pokemonService: PokemonService,
               private fb: FormBuilder
              ) {

    console.trace('PokemonRestComponent constructor');
    this.mensaje = '';
    this.pokemon = new Pokemon('');
   // this.pokemon.nombre = '';  // setter
    console.debug(this.pokemon);
    this.crearFormulario();


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

  }// ngOnInit


  private crearFormulario() {

    this.formulario = this.fb.group({
      id: new FormControl(0),
      nombre: new FormControl('',
                              Validators.compose(
                                  [
                                    Validators.required,
                                    Validators.minLength(2),
                                    Validators.maxLength(50)
                                  ])
                              ),
      habilidades:  this.fb.array( [], // creamos array sin hbailidades
                                  // [ this.crearFormGroupHabilidad() ] <- meter habilidades segun se contruye
                                  Validators.compose(
                                    [
                                      Validators.required,
                                      Validators.minLength(1)
                                    ])
                                )
    });

    this.formHabilidades = this.formulario.get('habilidades') as FormArray;

  }// crearFormulario


  private crearFormGroupHabilidad(): FormGroup {
    return this.fb.group({
              id: new FormControl(0),
              nombre: new FormControl('')
            });
  }

  checkCambiado( option: any ) {

    option.checked = !option.checked;          // TODO ver porque no cambia
    console.debug('checkCambiado %o', option);

    const habilidad = this.crearFormGroupHabilidad();
    habilidad.get('id').setValue( option.id );
    habilidad.get('nombre').setValue( option.nombre );

    this.formHabilidades.push(habilidad);


  }// checkCambiado


}

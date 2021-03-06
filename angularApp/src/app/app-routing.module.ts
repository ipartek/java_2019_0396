import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosComponent } from './paginas/productos/productos.component';
import { JuegoComponent } from './paginas/juego/juego.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ArraysComponent } from './paginas/arrays/arrays.component';
import { PokemonRestComponent } from './paginas/pokemon-rest/pokemon-rest.component';
import { EstilosComponent } from './paginas/estilos/estilos.component';
import { DirectivasComponent } from './paginas/directivas/directivas.component';
import { FiltrosComponent } from './paginas/filtros/filtros.component';
import { RecetasComponent } from './paginas/recetas/recetas.component';
import { Error404Component } from './paginas/error404/error404.component';
import { SaludarComponent } from './paginas/saludar/saludar.component';
import { ComparadorComponent } from './paginas/comparador/comparador.component';
import { TareasComponent } from './paginas/tareas/tareas.component';
import { PrivadoComponent } from './paginas/privado/privado.component';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './paginas/login/login.component';
import { ComprasComponent } from './paginas/compras/compras.component';
import { FormularioComponent } from './paginas/formulario/formulario.component';

/**
 * Definir las rutas la app de angular
 * El path debe coincidir con [routerLink] del componente navbar
 */
const routes: Routes = [
  { path: '',  component: InicioComponent},
  { path: 'productos', component: ProductosComponent },
  { path: 'juego', component: JuegoComponent },
  { path: 'pokemon', component: PokemonRestComponent },
  { path: 'arrays', component: ArraysComponent},
  { path: 'estilos', component: EstilosComponent},
  { path: 'directivas', component: DirectivasComponent},
  { path: 'filtros', component: FiltrosComponent},
  { path: 'recetas', component: RecetasComponent},
  { path: 'comparador', component: ComparadorComponent},
  { path: 'tareas', component: TareasComponent},
  { path: 'login', component: LoginComponent},
  { path: 'componentes', component: ComprasComponent},
  { path: 'formulario', component: FormularioComponent},
  //  : sirven para indicar que es un parametro
  { path: 'saludar/:pNombre', component: SaludarComponent},

  // vamos a proteger esta ruta con una guarda
  { path: 'privado', component: PrivadoComponent , canActivate: [LoginGuard] },
  { path: '**', component: Error404Component},

];

export const RUTAS =  [
  {
      'ruta' : '/',
      'nombre' : 'Inicio',
      'icono' : ''
  },
  {
      'ruta' : '/productos',
      'nombre' : 'Productos',
      'icono' : ''
  },
  {
      'ruta' : '/juego',
      'nombre' : 'Juego',
      'icono' : ''
  },
  {
      'ruta' : '/arrays',
      'nombre' : 'Arrays',
      'icono' : ''
  },
  {
      'ruta' : '/pokemon',
      'nombre' : 'Pokemon',
      'icono' : ''
  },
  {
      'ruta' : '/estilos',
      'nombre' : 'Sass',
      'icono' : ''
  },
  {
      'ruta' : '/directivas',
      'nombre' : 'Directivas',
      'icono' : ''
  },
  {
      'ruta' : '/filtros',
      'nombre' : 'Filtros',
      'icono' : ''
  },
  {
    'ruta' : '/comparador',
    'nombre' : 'Comparador',
    'icono' : ''
  },
  {
      'ruta' : '/recetas',
      'nombre' : 'Recetas',
      'icono' : ''
  },
  {
    'ruta' : '/componentes',
    'nombre' : 'Input Output',
    'icono' : ''
   },
   {
    'ruta' : '/tareas',
    'nombre' : 'Tareas',
    'icono' : ''
   },
   {
    'ruta' : '/formulario',
    'nombre' : 'Formulario',
    'icono' : ''
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

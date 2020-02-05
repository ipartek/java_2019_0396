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
  { path: 'filtros', component: FiltrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

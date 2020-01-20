import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosComponent } from './paginas/productos/productos.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { JuegoComponent } from './paginas/juego/juego.component';


const routes: Routes = [
  { path: '',            component: InicioComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'juego', component: JuegoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

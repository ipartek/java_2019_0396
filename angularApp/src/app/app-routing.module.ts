import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ProductosComponent } from './paginas/productos/productos.component';


const routes: Routes = [
  { path: '',            component: InicioComponent },
  { path: 'productos', component: ProductosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

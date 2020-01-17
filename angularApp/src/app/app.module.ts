import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';
import { BotonComponent } from './componentes/boton/boton.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ProductosComponent } from './paginas/productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    BotonComponent,
    NavbarComponent,
    InicioComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

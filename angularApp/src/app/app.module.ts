import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';
import { BotonComponent } from './componentes/boton/boton.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { JuegoComponent } from './paginas/juego/juego.component';
import { ArraysComponent } from './paginas/arrays/arrays.component';
import { PokemonRestComponent } from './paginas/pokemon-rest/pokemon-rest.component';
import { EstilosComponent } from './paginas/estilos/estilos.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    BotonComponent,
    NavbarComponent,
    InicioComponent,
    ProductosComponent,
    JuegoComponent,
    ArraysComponent,
    PokemonRestComponent,
    EstilosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Modulo para llamadas por HTTP
    FormsModule,      // Modulo para usar Formularios
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

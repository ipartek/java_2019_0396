import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { DirectivasComponent } from './paginas/directivas/directivas.component';
import { FiltrosComponent } from './paginas/filtros/filtros.component';
import { HelloDirective } from './directives/hello.directive';
import { SubrayarDirective } from './directives/subrayar.directive';
import { AnimalesPipe } from './pipes/animales.pipe';
import { RecetasComponent } from './paginas/recetas/recetas.component';
import { RecetaFiltroPipe } from './pipes/receta-filtro.pipe';
import { Error404Component } from './paginas/error404/error404.component';
import { SaludarComponent } from './paginas/saludar/saludar.component';
import { ComparadorComponent } from './paginas/comparador/comparador.component';
import { TareasComponent } from './paginas/tareas/tareas.component';
import { PrivadoComponent } from './paginas/privado/privado.component';
import { LoginComponent } from './paginas/login/login.component';
import { FrutasPipe } from './pipes/frutas.pipe';

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
    EstilosComponent,
    DirectivasComponent,
    FiltrosComponent,
    HelloDirective,
    SubrayarDirective,
    AnimalesPipe,
    RecetasComponent,
    RecetaFiltroPipe,
    Error404Component,
    SaludarComponent,
    ComparadorComponent,
    TareasComponent,
    PrivadoComponent,
    LoginComponent,
    FrutasPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,     // Modulo para llamadas por HTTP
    FormsModule,          // Modulo para usar Formularios con BanaInABox
    ReactiveFormsModule,  // Modulo para Formrulario Reactivos
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

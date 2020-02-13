import { Component, OnInit } from '@angular/core';
import { RUTAS } from 'src/app/app-routing.module';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  rutas: Array<any>;
  isLogged: boolean;

  constructor( private router: Router,
               private usuarioService: UsuarioService
              ) {
    console.trace('NavbarComponent constructor');
    this.rutas = RUTAS;
    this.isLogged = false;

  }// constructor

  ngOnInit() {
    console.trace('NavbarComponent ngOnInit');
    this.isLogged = this.usuarioService.estaLogeado();
  }// ngOnInit

  salir() {
    console.trace('NavbarComponent click boton Cerrar Sesión');
    const mensaje = '¿ Esta seguro que quiere cerrar la sesión ?';
    if ( confirm(mensaje) ) {
      this.usuarioService.cerrarSesion();
      this.router.navigate(['/']); // ir a Inicio
    }
  }// salir

}// NavbarComponent

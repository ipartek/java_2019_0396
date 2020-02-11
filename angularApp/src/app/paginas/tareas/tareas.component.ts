import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/model/tarea';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {

  tareas: Array<Tarea>;
  tituloNuevo: string;
  modoEdicion: boolean;

  // mensajes
  mensaje: string;
  showMensaje: boolean;


  constructor( private servicioTarea: TareasService ) {
    console.trace('TareasComponent constructor');
    this.tareas = []; // incializar el array
    this.tituloNuevo = '';
    this.modoEdicion = false;

    // mensaje
    this.mensaje = '';
    this.showMensaje = false;

  }// constructor

  ngOnInit() {
    console.trace('TareasComponent ngOnInit');

    this.cargarTareas();

  }// ngOnInit


  editarEstado(tarea: Tarea) {
    console.debug('click checkbox %o', tarea);
    tarea.completada = !tarea.completada;

    this.servicioTarea.modificar(tarea).subscribe( () => this.cargarTareas() );


  }// editarEstado


  eliminar(tarea: Tarea) {
    console.debug('click Eliminar %o', tarea);

    if ( confirm('¿Estas seguro?') ) {
      console.trace('Confirmado eliminacion');
      this.servicioTarea.eliminar( tarea.id ).subscribe( () => {
        this.mensaje = `Eliminada [${tarea.id}] ${tarea.titulo}`;
        this.showMensaje = true;
        this.cargarTareas();
      });


    } else {
      console.trace('Cancelado eliminacion');
    }

  }// eliminar

  nuevaTarea(): void {
    console.debug('click nueva tarea %s', this.tituloNuevo );

    // comprobar longitud > 1
    if ( this.tituloNuevo && this.tituloNuevo.trim().length < 1 ) {

        this.mensaje = 'Por favor escribe uan tarea mas larga';
        this.showMensaje = true;

    } else {

        // crear objeto Tarea
        const tNueva = new Tarea();
        tNueva.titulo = this.tituloNuevo;
        console.debug(tNueva);

        this.servicioTarea.crear(tNueva).subscribe( data => {
          console.debug('Nueva Tarea creada en json-server %o', data);
          this.tituloNuevo = '';
          this.cargarTareas();
          this.mensaje = 'Tarea Creada con Exito!!!';
          this.showMensaje = true;
        });

    }

  }// nuevaTarea


  /**
   * Llama al Serviucio para cargar todas las tareas
   * Nos va  aserivr para refrescar la lista
   */
  private cargarTareas(): void {
    console.trace('cargarTareas');

    // llamar al service para obtener tareas
    this.servicioTarea.listar().subscribe(
      datos => {
        console.debug('esto se ejecuta de forma asincrona');
        this.tareas = datos;
      },
      error => {
        console.warn('Servico Rest no funciona %o', error);
        this.mensaje = 'Servicio Rest No Funciona, posiblemente no lo hayas arrancado!!!';
        this.showMensaje = true;
      });

  }// cargarTareas


  cambiarTitulo(tarea: Tarea): void {
    console.debug('loose focus para cambiar titulo %o', tarea);
    this.servicioTarea.modificar(tarea).subscribe( () => this.cargarTareas() );

  }// cambiarTitulo


}// TareasComponent

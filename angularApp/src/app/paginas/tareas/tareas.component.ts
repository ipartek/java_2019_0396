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

  constructor( private servicioTarea: TareasService ) {
    console.trace('TareasComponent constructor');
    this.tareas = []; // incializar el array

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
      this.servicioTarea.eliminar( tarea.id ).subscribe( () => this.cargarTareas() );

    } else {
      console.trace('Cancelado eliminacion');
    }

  }// eliminar


  /**
   * Llama al Serviucio para cargar todas las tareas
   * Nos va  aserivr para refrescar la lista
   */
  private cargarTareas(): void {
    console.trace('cargarTareas');

    // llamar al service para obtener tareas
    this.servicioTarea.listar().subscribe( datos => {
      console.debug('esto se ejecuta de forma asincrona');
      this.tareas = datos;
    });

  }// cargarTareas


}// TareasComponent

import { Color } from './color.model';

export class Fruta {

    id: number;
    nombre: string;
    imagen: string;
    precio: number;
    colores: Array<Color>;

    constructor( nombre?: string ) {
        this.id = 0;
        this.nombre = (nombre) ? nombre : '';
        this.imagen = 'assets/images/fruta.jpg';
        this.precio = 0;
        this.colores = new Array<Color>();
    }

}

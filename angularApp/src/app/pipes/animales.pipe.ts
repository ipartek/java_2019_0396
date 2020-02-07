import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'animalesFiltro'
})
export class AnimalesPipe implements PipeTransform {

  /**
   * filtro personalizado para animales
   * @param datos Array<any> con animales
   * @param busqueda palabra a buscar dentro del atributo Nombre
   * @param tipo para filtar por atributo Tipo, si su valor es 'TODOS' no filtra por tipo
   * @see app/animales.ts json con los datos de los animales
   */
  transform(datos: any, busqueda: string, tipo: string): any {

    console.debug('AnimalesPipe datos %o', datos);
    console.debug('AnimalesPipe tipo %s', tipo);
    console.debug('AnimalesPipe busqueda %s', busqueda);

    let resultado = datos;

    // filtrar por tipo
    if ( tipo && tipo !== 'TODOS' ) {
      resultado = resultado.filter( (el) => el.Tipo === tipo);
    }

    // filtrar por nombre
    if ( busqueda && '' !== busqueda.trim() ) {

      busqueda = busqueda.toUpperCase();
      resultado = resultado.filter( (el) => {
        console.debug(el);
        const nombre = el.Nombre.toUpperCase();
        return nombre.includes(busqueda);
      });
    }

    return resultado;


  }// transform

}// AnimalesPipe

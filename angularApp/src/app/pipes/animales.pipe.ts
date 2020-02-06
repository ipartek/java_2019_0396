import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'animalesFiltro'
})
export class AnimalesPipe implements PipeTransform {

  /**
   * filtro personalizado para animales
   * @param datos Array<any> con animales
   * @param busqueda palabra a buscar dentro del atributo Nombre
   * @param tipo para filtar por atributo Tipo
   * @see app/animales.ts json con los datos de los animales
   */
  transform(datos: any, busqueda: string, tipo: string): any {

    console.debug(datos);
    console.debug(tipo);
    console.debug(busqueda);

    if ( busqueda && '' !== busqueda.trim() ) {

      // filtrar por nombre
      busqueda = busqueda.toUpperCase();

      const resultado = datos.filter( (el) => {
        console.debug(el);
        const nombre = el.Nombre.toUpperCase();
        return nombre.includes(busqueda);
      });

      // filtrar por tipo
      if ( tipo && tipo !== 'TODOS' ) { 

        return resultado.filter( (el) => el.Tipo === tipo);

      } else {
        return resultado;
      }
      

    } else {

      if ( tipo && tipo !== 'TODOS' ) {
        return datos.filter( (el) => el.Tipo === tipo);
      }else{
        return datos;
      }  

      
    }

  }// transform

}// AnimalesPipe

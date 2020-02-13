import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'frutasPipe'
})
export class FrutasPipe implements PipeTransform {

  transform( frutas: Array<any> , options: Array<any> ): any {
    console.info('frutasPipe');
    return frutas;
  }

}

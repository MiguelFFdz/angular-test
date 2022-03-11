import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pastDays'
})
export class PastDaysPipe implements PipeTransform {

  transform(value: string|null): string {

    let diferenciaDias: number = 0;
    let diasPasadosString: string = '';

    if(value) {
      const fechaArray = value.split('/');
      let fecha = new Date(Number(fechaArray[2]), Number(fechaArray[1]) - 1, Number(fechaArray[0]));
      let ahora = new Date();

      const diferenciaTiempo = ahora.getTime() - fecha.getTime();
      diferenciaDias = Math.trunc(diferenciaTiempo / (1000 * 3600 *24));
    }

    if(diferenciaDias === 0) {
      diasPasadosString = 'Hoy';
    } else if(diferenciaDias === 1) {
      diasPasadosString = 'Ayer';
    } else if(diferenciaDias > 1) {
      diasPasadosString = diferenciaDias + ' días';
    }

    return `${value} - ${diasPasadosString}`;
  }

}

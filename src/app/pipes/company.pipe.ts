import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'company'
})
export class CompanyPipe implements PipeTransform {

  transform(value: string, empresa: string = 'Acme Inc.'): string {

    return `${value} - ${empresa}`;
  }

}

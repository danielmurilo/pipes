import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comprimento'
})
export class ComprimentoPipe implements PipeTransform {

  transform(value: any[]): unknown {
    return null;
  }

}

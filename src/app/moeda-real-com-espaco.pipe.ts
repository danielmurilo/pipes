import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moedaRealComEspaco'
})
export class MoedaRealComEspacoPipe implements PipeTransform {

  transform(value: number): unknown {
    return 'R$ ' + value.toFixed(2);
  }

}

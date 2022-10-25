import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(value: string): string {
    if(value.trim().length == 11){
      let a = value.substring(0, 3)
      let b = value.slice(3, 6)
      let c = value.slice(6, 9)
      let d = value.slice(9)      
      return a + '.' + b + '.' + c + '-' + d
    } else{
      return 'cpf deve conter 11 dígitos'
    }
  }

  cpf(cpf: string): string{
    return cpf.replace(/([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2})/, '$1.$2.$3-$4')
  }

}

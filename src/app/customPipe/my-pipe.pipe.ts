import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe',
  standalone: true
})
export class MyPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value !== null && value !== undefined && value !== ''){
      return value
    }else{
      return 'NA'
    }
  }

}

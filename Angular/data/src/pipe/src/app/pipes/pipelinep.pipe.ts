import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipelinep'
})
export class PipelinepPipe implements PipeTransform {

  transform(value: string): string {
    
    if(value=="")
    
      return "no data available";
    else
    return value;
  }

}

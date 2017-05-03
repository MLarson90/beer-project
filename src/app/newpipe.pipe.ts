import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: 'newpipe'
})
export class NewpipePipe implements PipeTransform {

  transform(input:Keg[], filterByPrice) {
    var output: Keg[]=[];
    if(filterByPrice === "cheap"){
      for(var i=0; i<input.length; i ++){
        if(input[i].price < 6){
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}

import {Pipe, PipeTransform} from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "typeofbeer",
  pure: false
})
export class TypeofbeerPipe implements PipeTransform {
  transform(input: Keg[], args){
    var output: Keg[] = [];
    for(var i = 0; i<input.length; i++){
      if (input[i].type === "IPA"){
        output.push(input[i]);
      }
    }
    return output;
  }
}

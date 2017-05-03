import {Pipe, PipeTransform} from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "typeofbeer",
  pure: false
})
export class TypeofbeerPipe implements PipeTransform {
  transform(input: Keg[], filterByType){
    var output: Keg[] = [];
    if(filterByType === "IPA"){
      for(var i = 0; i<input.length; i++){
        if (input[i].type === filterByType){
          output.push(input[i]);
        }
      }
      return output;
    } else if (filterByType === "Lager") {
      for(var i = 0; i<input.length; i++){
        if (input[i].type === filterByType){
          output.push(input[i]);
        }
      }
      return output;
    }else if (filterByType === "Stout") {
      for(var i = 0; i<input.length; i++){
        if (input[i].type === filterByType){
          output.push(input[i]);
        }
      }
      return output;
    } else if (filterByType === "Ale") {
      for(var i = 0; i<input.length; i++){
        if (input[i].type === filterByType){
          output.push(input[i]);
        }
      }
      return output;
    }  else {
      return input;
    }

  }
}

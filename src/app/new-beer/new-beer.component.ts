import {
  Component,
  Output,
  EventEmitter
} from '@angular/core';
import {
  Keg
} from 'app/keg.model';


@Component({
  selector: 'app-new-beer',
  templateUrl: './new-beer.component.html',
  styleUrls: ['./new-beer.component.css']
})
export class NewBeerComponent {
  @Output() newKegSender = new EventEmitter();
  submitForm(name: string, brand: string, price: number, alcoholContent: number, type: string, pints: number) {
    var newBeer: Keg = new Keg(name, brand, price, alcoholContent, type, pints);
    this.newKegSender.emit(newBeer);
  }
}

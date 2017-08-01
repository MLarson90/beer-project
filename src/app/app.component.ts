import { Component, OnInit } from '@angular/core';
import { Keg } from 'app/keg.model';
import { KegService } from 'app/keg.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [KegService, AngularFireDatabase]
})
export class AppComponent implements OnInit {

  title = 'app works!';
  kegs: FirebaseListObservable<any[]>;
  constructor(private kegService: KegService) { }
  ngOnInit() {
    this.kegs = this.kegService.getKegs();
  }
  sellPint(keg) {
    if (keg.pints > 0) {
      return keg.pints -= 1;
    } else {
      return keg.pints = 0;
    }
  }
  sellGrowler(keg) {
    if (keg.pints < 2) {
      alert("Not Enough Beer!");
    } else if (keg.pints > 0) {
      return keg.pints -= 2;
    } else {
      return keg.pints = 0;
    }
  }
  sellLgGrowler(keg) {
    if (keg.pints < 4) {
      alert("Not Enough Beer!");
    } else if (keg.pints > 0) {
      return keg.pints -= 4;
    } else {
      return keg.pints = 0;
    }
  }
  runningLow(keg) {
    if (keg.pints < 11) {
      return 'bg-danger';
    }
  }
  lowSale(keg) {
    if (keg.pints < 30) {
      keg.price = keg.saleUder30;
    } else {
      keg.price = keg.price;
    }
  }
  resetPrice(keg) {
    if (keg.pints > 29) {
      keg.price = keg.restock;
    } else {
      keg.price = keg.saleUder30;
    }
  }
  howDrunk(keg) {
    if (keg.alcoholContent < 5) {
      return 'bg-info';
    } else if (keg.alcoholContent > 7) {
      return 'bg-danger';
    } else {
      return 'bg-warning';
    }
  }
  onSale(keg) {
    if (keg.pints < 30) {
      return 'bg-success';
    }
  }
  addKeg(newKegFromChild: Keg) {
    this.kegs.push(newKegFromChild);
  }

  filterByType: string = "All kegs";
  onChange(optionFromMenu) {
    this.filterByType = optionFromMenu;
  }
  filterByPrice: string = "All kegs";
  otherChange(optionFromMenu) {
    this.filterByPrice = optionFromMenu;
  }
  beginUpdatingKeg(kegToUpdate) {
    this.kegService.upDateKeg(kegToUpdate);
  }
}

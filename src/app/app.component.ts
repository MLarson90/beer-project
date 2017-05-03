import { Component } from '@angular/core';
import { Keg } from 'app/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  kegs: Keg[]=[
    new Keg("Bud Light", "Budweizer", 3, 3.2, "Lager", 124),
    new Keg("Spotted Cow", "New Glarus", 5, 5.4, "Ale", 124),
    new Keg("Lucille", "Georgetown Brewing", 5, 7.2, "IPA", 124),
    new Keg("Assassin", "Toppling Goliath", 7, 12, "Stout", 124),
    new Keg("Hercules", "Great Divid", 7, 10, "IPA", 124),
    new Keg("Cowboy Trail", "Six Corners", 5, 5.1, "Ale", 124),
    new Keg("Insane Rush", "Bootstrap", 6, 7, "IPA", 124),
    new Keg("Hamm's", "Hamm's", 3, 4.6, "Lager", 124),
    new Keg("A Little Sumpin' Sumpin'", "Lagunitas", 5, 7.5, "Ale", 124),
    new Keg("Nut Smasher", "Willoughby", 7, 11, "Stout", 124)
  ];

  sellPint(keg) {
    if (keg.pints > 0) {
      return keg.pints -= 1;
    } else {
      return keg.pints = 0;
    }
  }
  sellGrowler(keg) {
    if(keg.pints < 2){
      alert("Not Enough Beer!");
    } else if (keg.pints > 0) {
      return keg.pints -= 2;
    } else {
      return keg.pints = 0;
    }
  }
  sellLgGrowler(keg) {
    if(keg.pints < 4){
      alert("Not Enough Beer!");
    }else if (keg.pints > 0) {
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
  resetPrice(keg){
    if(keg.pints > 29){
      keg.price = keg.restock;
    } else {
      keg.price = keg.saleUder30;
    }
  }
  howDrunk (keg) {
    if (keg.alcoholContent < 5) {
      return 'bg-info';
    }else if (keg.alcoholContent > 7) {
      return 'bg-danger';
    } else {
      return 'bg-warning';
    }
  }
  onSale(keg) {
    if(keg.pints < 30) {
      return 'bg-success';
    }
  }
  addKeg(newKegFromChild: Keg){
    this.kegs.push(newKegFromChild);
  }

  filterByType: string = "All kegs";
  onChange(optionFromMenu){
    this.filterByType = optionFromMenu;
  }
  filterByPrice: string = "All kegs";
  otherChange(optionFromMenu){
    this.filterByPrice = optionFromMenu;
  }
}

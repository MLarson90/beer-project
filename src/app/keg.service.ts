import { Injectable } from '@angular/core';
import { Keg } from './keg.model';
import { KEGS } from './mock-kegs';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class KegService {
  kegs: FirebaseListObservable<any[]>;
  constructor(private angularFire: AngularFireDatabase) {
    this.kegs = angularFire.list('/kegs');
  }

  getKegs() {
    return this.kegs;
  }
  getKegbyId(kegId: string) {
    return this.angularFire.object('/kegs/' + kegId);
  }
  upDateKeg(localUpdatedKeg) {
    var kegEntryInFireBase = this.getKegbyId(localUpdatedKeg.$key);
    kegEntryInFireBase.update({
      name: localUpdatedKeg.name,
      brand: localUpdatedKeg.brand,
      price: localUpdatedKeg.price,
      alcoholContent: localUpdatedKeg.alcoholContent,
      type: localUpdatedKeg.type,
      pints: localUpdatedKeg.pints,
      saleUder30: localUpdatedKeg.saleUder30,
      restock: localUpdatedKeg.price
    });
  }
}

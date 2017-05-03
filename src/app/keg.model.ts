export class Keg {
  public editName: boolean = false;
  public editPrice: boolean = false;
  public editAlcoholContent: boolean = false;
  public editType: boolean = false;
  public editBrand: boolean = false;
  public editPints: boolean = false;
  public saleUder30: number = this.price - 1.5;
  public restock: number = this.price;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number, public type: string, public pints: number) {}
}

export class Card {
  public thumbnail: string;
  public title: string;
  public price: number;
  public seller: string;

  constructor(thumbnail: string, title: string, price: number, seller: string){
    this.price = price;
    this.title = title;
    this.thumbnail = thumbnail;
    this.seller = seller;
  }
}

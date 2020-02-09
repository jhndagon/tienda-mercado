import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() article: Card;
  seeMoreTitle = 10;
  iconTitle = 'keyboard_arrow_down';
  seeMoreSeller = 10;
  iconSeller = 'keyboard_arrow_down';

  constructor() { }

  ngOnInit() {
  }

  expandText(data) {
    if (data === 1) {
      this.seeMoreTitle = this.seeMoreTitle ? undefined : 10;
      this.iconTitle = this.seeMoreTitle ? 'keyboard_arrow_down' : 'keyboard_arrow_up';
    } else {
      this.seeMoreSeller = this.seeMoreSeller ? undefined : 10;
      this.iconSeller = this.seeMoreSeller ? 'keyboard_arrow_down' : 'keyboard_arrow_up';
    }
  }

}

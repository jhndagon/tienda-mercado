import { Component, OnInit, Output } from '@angular/core';
import { MercadolibreService } from '../../services/mercadolibre.service';
import { EventEmitter } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchInput: string;

  public cards: Card[];

  @Output() datos: EventEmitter<Card[]>;

  constructor(private mercadolibreService: MercadolibreService) {
    this.datos = new EventEmitter<Card[]>();
  }

  ngOnInit() {
  }

  getInformation() {
    if (this.searchInput) {
      this.cards = new Array();
      this.mercadolibreService.getInformation(this.searchInput).subscribe(
        data => {
          data.map(dato => {
            this.mercadolibreService.getNicknameByUserId(dato.seller).subscribe( seller => dato.seller = seller.nickname);
          });
          this.cards = data;
          this.datos.emit(data);
      }
      );
    }
  }

}

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

  @Output() datos: EventEmitter<any>;

  constructor(private mercadolibreService: MercadolibreService) {
    this.datos = new EventEmitter<any>();
  }

  ngOnInit() {
  }

  getInformation() {
    if (this.searchInput) {
      this.mercadolibreService.getInformation(this.searchInput).subscribe(
         data => {
          data.articles.map(dato => {
           this.mercadolibreService.getNicknameByUserId(dato.seller).subscribe( seller => dato.sellerName = seller.nickname);
          });
          this.datos.emit(data);
      }
      );
    }
  }

  onKeyPress(event: any) {
    if (event.key === 'Enter') {
      this.getInformation();
    }
  }

}

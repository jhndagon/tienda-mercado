import { Component, OnInit } from '@angular/core';
import { MercadolibreService } from '../../services/mercadolibre.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchInput: string;

  constructor(private mercadolibreService: MercadolibreService) {

  }

  ngOnInit() {
  }

  showInformation() {
    if (this.searchInput) {
      this.mercadolibreService.getInformation(this.searchInput)
    }
  }

}

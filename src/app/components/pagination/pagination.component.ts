import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { MercadolibreService } from '../../services/mercadolibre.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  @Output() datos: EventEmitter<any>;
  @Input() query: string;
  public over;

  constructor(private mercadolibreService: MercadolibreService) {
    this.datos = new EventEmitter<any>();
  }

  pageChange(event: any) {

    this.mercadolibreService.getInformation(`${this.query}&offset=${(event - 1) * 50}`).subscribe(
      (data: any) => {
        data.currentPage = event;
        data.articles.map(dato => {
          this.mercadolibreService.getNicknameByUserId(dato.seller).subscribe(seller => dato.seller = seller.nickname);
        });
        this.datos.emit(data);
      }
    );
  }
}


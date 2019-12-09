import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators/';

@Injectable({
  providedIn: 'root'
})
export class MercadolibreService {

  private url = 'https://api.mercadolibre.com/';

  constructor( private httpClient: HttpClient) { }

  getInformation(query: string): any {
    return this.httpClient.get(`${ this.url }/sites/MLA/search?q=${ query }`).pipe( map(
      (data: any) => {
        console.log(data)
        if (data) {
          console.log(data);
          return data.results;
        }
      }
    ) );
  }

}

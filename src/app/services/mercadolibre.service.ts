import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators/';
import { Card } from '../models/card';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MercadolibreService {

  private url = 'https://api.mercadolibre.com';

  constructor(private httpClient: HttpClient) { }

  getQuery(query: string) {
    return this.httpClient.get(`${this.url + query}`);
  }

  getInformation(search: string) {
    // `${ this.url }/sites/MCO/search?q=${ search }`)
    const list = {
      articles: null,
      paging: null,
      query: null
    };
    return this.getQuery(`/sites/MCO/search?q=${search}`).pipe(map(

      (data: any) => {
        list.query = data.query;
        list.paging = data.paging;
        list.articles = data.results.map(dato => {
          this.getNicknameByUserId(dato.seller.id);
          return new Card(dato.thumbnail, dato.title, dato.price, dato.seller.id);
        });
        return list;
      }
    ));
  }

  getNicknameByUserId(id: string) {

    return this.getQuery(`/users/${id}`).pipe(map((data: any) => data));
  }

}

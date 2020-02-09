import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public articles;
  public paging;
  public query;
  public config;
  public currentPage;

  getArticules(data) {
    this.articles = data.articles;
    this.paging = data.paging;
    this.query = data.query;
    this.currentPage = data.currentPage || 1,
    this.config = {
      itemsPerPage: this.paging.limit,
      currentPage: this.currentPage,
      totalItems: this.paging.primary_results
    };
  }
}

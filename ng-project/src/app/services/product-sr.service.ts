import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iProduct } from '../interfaces/i-product';

@Injectable({
  providedIn: 'root'
})
export class ProductSr {

  apiUrl: string = "https://dummyjson.com/docs/products";
  products!: iProduct[];

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts() {
    this.http.get<iProduct[]>(this.apiUrl).subscribe(data => {
      this.products = data;
    });
  }

  getProducts() {
    return this.products;
  }

}

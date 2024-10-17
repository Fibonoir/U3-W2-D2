import { HttpClient } from '@angular/common/http';
import { IJSONResponse } from './../interfaces/i-jsonresponse';
import { Injectable } from '@angular/core';
import { map, Observable, ReplaySubject, Subject } from 'rxjs';
import { iProduct } from '../interfaces/i-product';

@Injectable({
  providedIn: 'root'
})
export class ProductSrvService {

  constructor(private HTTP: HttpClient) { }

  apiUrl: string = "https://dummyjson.com/products"
  cart$ = new Subject<iProduct>()
  favourites$ = new ReplaySubject<iProduct>()

  getProducts() {
    return this.HTTP.get<IJSONResponse>(this.apiUrl)
    .pipe(
      map(res => res.products)
    )
  }

  addToCart(product: iProduct) {
    this.cart$.next(product);
  }

  addToFav(fav: iProduct) {
    this.favourites$.next(fav);
  }
}

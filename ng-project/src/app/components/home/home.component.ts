import { iProduct } from './../../interfaces/i-product';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ProductSrvService } from '../../services/product-srv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {

  products: iProduct[] = [];

  constructor(private productSr: ProductSrvService) {}

  ngOnInit(): void {
    this.productSr.getProducts().subscribe(p=> {
      this.products = p
    })
  }

  addToCart(product: iProduct):void {
    this.productSr.addToCart(product);
  }

  addToFav(fav: iProduct):void {
    this.productSr.addToFav(fav);

  }
}

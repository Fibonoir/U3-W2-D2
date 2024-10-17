import { Component, OnInit } from '@angular/core';
import { ProductSrvService } from '../../services/product-srv.service';
import { iProduct } from '../../interfaces/i-product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  cartOpen: boolean = false
  cart: iProduct[] = []

  constructor(private productS: ProductSrvService){}

  ngOnInit(): void {
    this.productS.cart$
    .subscribe(product => {
      this.cart.push(product)
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ProductSrvService } from '../../services/product-srv.service';
import { iProduct } from '../../interfaces/i-product';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.scss'
})
export class FavouritesComponent implements OnInit {
  favArr: iProduct[]=[]

  constructor(private prodS: ProductSrvService){}
  ngOnInit(): void {
    this.prodS.favourites$
    .subscribe(fav => {
      this.favArr.push(fav)

    })
  }

}

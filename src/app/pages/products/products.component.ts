import {Component, OnInit} from '@angular/core';
import { ProductsService } from './services/products.service';
import { tap } from 'rxjs/operators'
import { Product } from './interfaces/product.interfaces';
// import {JsonService} from './json'

@Component({
  selector:"app-products",
  templateUrl:"./products.component.html",
  styleUrls:['./products.component.scss']
})

export class ProductsComponent implements OnInit {
   products!:any;
  //  pro!:["m","a", "r"]
  constructor(private productSvc: ProductsService){
    // console.log('pr', this.pro)

  }

  ngOnInit(): void {
    this.productSvc.getProducts().subscribe((products) => {
      console.log(products);
      this.products = products;
    })
  }
  // ngOnInit(): void {
  //   this.productSvc.getProducts()
  //   .pipe(
  //     tap((products: any) => {
  //       this.products = products.values
  //     })
  //   )
  //   .subscribe()
}

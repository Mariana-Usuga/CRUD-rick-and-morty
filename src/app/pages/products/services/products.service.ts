import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interfaces'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiURL = 'https://rickandmortyapi.com/api/character';
  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get(this.apiURL)
  }
  // getProducts(): Observable<{values: Product[]}>{
  //   return this.http.get<{values: Product[]}>(this.apiURL)
  // }
}

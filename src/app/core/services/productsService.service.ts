import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsInfoService {

  constructor(
    private http: HttpClient
  ) { }

  products$ = this.http.get<Product[]>('https://fakestoreapi.com/products').pipe(shareReplay());

  setProducts() {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }

  getProducts() {
    return this.products$;
  }


}

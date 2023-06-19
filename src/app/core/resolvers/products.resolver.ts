import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { Product } from '../interfaces/product';
import { ProductsInfoService } from '../services/productsService.service';

@Injectable({ providedIn: 'root' })
export class ProductsResolver implements Resolve<Product[]> {
  constructor(private prodServ: ProductsInfoService) {}

  resolve(): Observable<Product[]> | Promise<Product[]> | Product[] {
    return this.prodServ.getProducts();
  }
}

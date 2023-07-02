import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, first, map } from 'rxjs';

import { Product } from '../interfaces/product';
import { ProductsInfoService } from '../services/productsService.service';

@Injectable({ providedIn: 'root' })
export class ProductsResolver implements Resolve<Observable<Product[] | Product>> {
  constructor(private prodServ: ProductsInfoService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable <Product[] | Product> {
    const id = route.paramMap.get('id');
    if (id) {
      return this.prodServ.getOneProduct(id);
    }
    return this.prodServ.getProducts();
  }
}

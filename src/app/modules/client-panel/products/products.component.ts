import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BehaviorSubject, Observable, finalize, map, tap } from 'rxjs';
import { Product } from 'src/app/core/interfaces/product';
import { ProductsInfoService } from 'src/app/core/services/productsService.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  products$ = new BehaviorSubject<Product[] | null>(null);
  isLoading: boolean = true;

  constructor(
    private prodServ: ProductsInfoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.prodServ.products$
      .pipe(
        finalize(() => this.isLoading = false),
        map((item) => {
          this.products$.next(item);
        })
      )
      .subscribe();
  }

  redirectTo(id: string) {
    this.router.navigate([`/products/${id}`]);
  }
}

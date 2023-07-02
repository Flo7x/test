import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Route, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription, finalize, map, tap } from 'rxjs';
import { Product } from 'src/app/core/interfaces/product';
import { ProductsInfoService } from 'src/app/core/services/productsService.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  products$: Observable<Product[]>  | undefined;

  isLoading: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }


    ngOnInit(): void {
      this.products$ = this.route.data.pipe(
        finalize(() => this.isLoading = false),
        map((data) => data['products'])
      );
    }

  redirectTo(id: string) {
    this.router.navigate([`/products/${id}`]);
  }

}

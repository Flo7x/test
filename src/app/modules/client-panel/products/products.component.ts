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

  productSubcription: Subscription | undefined;


  // products$: Observable<Product[]> | undefined;
  isLoading: boolean = true;

  constructor(
    private prodServ: ProductsInfoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getProducts();


    // this.products$ = this.prodServ.products$;
  }

  redirectTo(id: string) {
    this.router.navigate([`/products/${id}`]);
  }

  getProducts() {
    this.productSubcription = this.route.data.subscribe((data) => {
      console.log(data);
      this.products$ = data['products'];
      this.isLoading = false;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subscription, finalize, map, switchMap } from 'rxjs';
import { Product } from 'src/app/core/interfaces/product';
import { ProductsInfoService } from 'src/app/core/services/productsService.service';

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.scss']
})
export class OneProductComponent implements OnInit {

  currentProduct$ = new BehaviorSubject<Product | null>(null);
  interestingProducts$ = new BehaviorSubject<Product[] | null>(null);

  productId!: Partial<string>;
  interestingId: string[] | undefined;

  bufProducts: Product[] = [];

  constructor(
    private prodServ: ProductsInfoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id')!;
    })

    this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(() => {
        return this.prodServ.products$;
      }),
      switchMap(products => {
        this.foundRelatedId(products.length, Number(this.productId));
        products.forEach(item => {
          if ( item.id?.toString() === this.productId.toString()) this.currentProduct$.next(item);
          this.interestingId?.forEach( interesting => {
            if (interesting.toString() === item.id!.toString())
              {
                this.bufProducts.push(item);
                this.interestingProducts$.next(this.bufProducts);
              }

          })
        })
        return this.prodServ.getProducts();
      })
    ).subscribe(data => {
      console.log(this.currentProduct$);
      console.log(this.interestingProducts$);
    });
  }


  foundRelatedId(length: number, id: number) {
    const arrayInteresting: string [] = [];
    if (id === 1) {
      arrayInteresting.push((id + 1).toString());
      arrayInteresting.push((length - 1).toString());
    } else if (id === length) {
      arrayInteresting.push((id - 1).toString());
      arrayInteresting.push((1).toString());
    } else {
      arrayInteresting.push((id - 1).toString());
      arrayInteresting.push((id + 1).toString());
    }

    this.interestingId = arrayInteresting;
  }

  redirectTo(id: string) {
    this.bufProducts = [];
    this.router.navigate([`/products/${id}`]);
  }

}

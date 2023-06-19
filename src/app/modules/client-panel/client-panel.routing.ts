import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { OneProductComponent } from './products/one-product/one-product.component';
import { ProductsResolver } from 'src/app/core/resolvers/products.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: {
      products: ProductsResolver
    },
    component: ProductsComponent,
  },
  {
    path: ':id',
    resolve: {
      products: ProductsResolver
    },
    component: OneProductComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

export const ClientPanelRoutes = RouterModule.forChild(routes);

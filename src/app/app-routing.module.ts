import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsResolver } from './core/resolvers/products.resolver';

const routes: Routes = [
  { path: 'products',
    resolve: {
      products: ProductsResolver
    },
    loadChildren: () => import('./modules/client-panel/client-panel.module').then(m => m.ClientPanelModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

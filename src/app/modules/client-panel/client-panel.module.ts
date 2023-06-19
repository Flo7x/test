import { NgModule } from '@angular/core';
import { CommonModule, SlicePipe } from '@angular/common';
import { OneProductComponent } from './products/one-product/one-product.component';
import { ProductsComponent } from './products/products.component';
import { ClientPanelRoutes } from './client-panel.routing';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    ClientPanelRoutes,
    MatProgressSpinnerModule,
    RouterModule
  ],
  declarations: [
    ProductsComponent,
    OneProductComponent,

  ],
})
export class ClientPanelModule { }

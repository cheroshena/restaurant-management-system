import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductDataService } from '../core/products/product-data.service';
import { HttpClientModule } from '@angular/common/http';
import { MmMaterialModule } from '../shared/material.module';
import { SharedModule } from '@shared/shared.module';
import {MatCarouselModule} from '@ngmodule/material-carousel'

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    MmMaterialModule, SharedModule,
    MatCarouselModule.forRoot()
  ],
  providers: [ProductDataService]
})
export class ProductsModule { }

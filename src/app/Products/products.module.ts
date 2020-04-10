import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { InstructionsComponent } from '../instructions/instructions.component';
import { DetailsComponent } from './details/details.component';
import { ProductServices } from '../services/product.service';

const productRoutes: Routes = [
  {path: 'products', component: ProductsComponent,
    children: [
      {path: '', component: InstructionsComponent},
      {path: 'details/:id', component: DetailsComponent}
    ]}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes)
  ],
  declarations: [
    ProductsComponent,
    DetailsComponent
  ],
  providers: [
    ProductServices
  ]
})
export class ProductsModule { }

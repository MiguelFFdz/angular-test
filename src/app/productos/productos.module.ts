import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductosComponent } from './productos.component';
import { ProductosListComponent } from './productos-list/productos-list.component';
import { ProductosDetailsComponent } from './productos-details/productos-details.component';


@NgModule({
  declarations: [
    ProductosComponent,
    ProductosListComponent,
    ProductosDetailsComponent,
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductosModule { }

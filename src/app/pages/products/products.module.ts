import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// import { BrowserModule } from '@angular/platform-browser'
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
// import { MaterialModule } from 'src/app/material.module';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsComponent,
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    // HttpClientModule,
    // MaterialModule
    MatCardModule
  ]
})
export class ProductsModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  { path:'products', component: ProductsComponent },
  // { path:'products',
  //  loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule) },
  // { path:'**', redirectTo:"", pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

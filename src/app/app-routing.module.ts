import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'home',component:HomeComponent},
  {path: 'products',component:ProductsComponent},
  {path: 'account',component:AccountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

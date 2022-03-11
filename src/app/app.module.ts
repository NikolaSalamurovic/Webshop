import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CartComponent } from './components/cart/cart.component';
import { ButtonComponent } from './components/button/button.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AdminComponent } from './components/admin/admin.component';

const appRoutes: Routes = [
  {path: '', component: HeaderComponent},
  {path: 'cart', component: CartComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'admin', component: AdminComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductsComponent,
    CartComponent,
    ButtonComponent,
    CheckoutComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

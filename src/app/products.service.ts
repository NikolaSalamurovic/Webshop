import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsComponent } from './components/products/products.component';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  getData(){
    let url="https://medieinstitutet-wie-products.azurewebsites.net/api/products";
    return this.http.get(url);

  
  }
  
}



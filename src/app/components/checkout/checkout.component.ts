import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart: any = []
  private url = 'https://medieinstitutet-wie-products.azurewebsites.net/api/orders';

  constructor(private router: Router, private http:HttpClient) {
    http.get(this.url)
      .subscribe(respone => {
        this.cart = respone;
      })
   }
   

  ngOnInit(): void {
  }

  hasRoute(route: string){
    return this.router.url === route;
  }

}

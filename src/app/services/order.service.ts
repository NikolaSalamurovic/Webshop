import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderAPI } from '../models/OrderAPI';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  
  getOrderAPI():Observable<OrderAPI[]>{
    return this.http.get<OrderAPI[]>(environment.urlCompany);
  }

  pushOrder(data: OrderAPI){
    return this.http.post(environment.urlOrder, data).subscribe();
  }

  deleteFromAPI(id:number){
    this.http
      .delete(environment.urlOrder + id + '?companyId=41')
      .subscribe(() => this.getOrderAPI());
  }
}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { OrderAPI } from 'src/app/models/OrderAPI';
import { OrderService } from 'src/app/services/order.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  orderAPI: OrderAPI[] = []

  constructor(
    private router: Router,
    private item:OrderService,
    ) { }

  ngOnInit(): void {
    this.item.getOrderAPI().subscribe((data:OrderAPI[]) => {
      this.orderAPI = data
    })
  }

  onDelete(id: number){
    this.item.deleteFromAPI(id);
    this.orderAPI = this.orderAPI.filter(orderAPI => orderAPI.id !== id)
  }

  hasRoute(route: string){
    return this.router.url === route;
  }

}

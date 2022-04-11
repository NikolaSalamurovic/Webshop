import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/ICart';
import { CartProduct } from 'src/app/models/ICartProduct';
import { OrderAPI } from 'src/app/models/OrderAPI';
import { User } from 'src/app/models/IUser';
import { OrderService } from 'src/app/services/order.service';
import { IMovies } from 'src/app/models/IMovies';
import { HttpClient } from '@angular/common/http';
import { CartService } from 'src/app/services/cart.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  cart!:Cart;
  constructor(
    private router: Router,
    private cartService: CartService,
    private orderService: OrderService,
    private formBuilder: FormBuilder,
    ) {}

    user:User[] = [];

    userForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
    });

    OrderAPI: OrderAPI[] = [];
  
  ngOnInit(): void {
    this.setCart();
    this.orderService.getOrderAPI().subscribe((data:OrderAPI[]) => {
      this.OrderAPI = data
    })

  }
  changeQuantity(cartItem:CartProduct, stringQuantity: string){
      const quantity = parseInt(stringQuantity);
      this.cartService.changeQuantity(cartItem.movie.id, quantity);
      this.setCart();
  }


  removeCartItem(cartItem: CartProduct){
    this.cartService.removeCartProduct(cartItem.movie.id);
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }

  orderToAPI(){
    var orderRows = this.cart.items.map((item) => {
      return {productId: item.movie.id, amount: item.quantity}
    });

    let sendToAPI: OrderAPI = {
      id: 0,
      companyId: 41,
      created: new Date(),
      createdBy: this.userForm.value.firstName + ' ' + this.userForm.value.lastName,
      paymentMethod: 'card',
      totalPrice: this.cart.priceSum,
      status: 0,
      orderRows: orderRows,
    };

    return this.orderService.pushOrder(sendToAPI);
  }

  hasRoute(route: string){
    return this.router.url === route;
  }
    
    
}





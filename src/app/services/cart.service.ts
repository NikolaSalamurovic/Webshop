import { Injectable } from '@angular/core';
import { Cart } from '../models/ICart';
import { IMovies } from '../models/IMovies';
import { CartProduct } from '../models/ICartProduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();

  addToCart(movie: IMovies) {
    
    let cartProduct = this.cart.items.find(item => item.movie.id === movie.id);
    if(cartProduct){
      this.changeQuantity(movie.id, cartProduct.quantity + 1);
      return;
    }
    this.cart.items.push(new CartProduct(movie));
  }
  removeCartProduct(movieId: number): void{
    this.cart.items = this.cart.items.filter(item => item.movie.id != movieId);
  }
  changeQuantity(movieId:number, quantity:number){
    let CartProduct = this.cart.items.find(item => item.movie.id === movieId);
    if(!CartProduct) return;
    CartProduct.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }
}

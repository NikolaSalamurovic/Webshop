import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/ICart';
import { IMovies } from 'src/app/models/IMovies';
import { ProductService } from 'src/app/services/products.service';
import { HttpClient } from '@angular/common/http';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
  
export class ProductsComponent implements OnInit {
  movies: IMovies[] = [];

  constructor(
    private router: Router,
    private item: ProductService,
    private cartService: CartService
  ){}

  ngOnInit(): void {
    this.item.getProducts().subscribe((data:IMovies[]) => {
      this.movies = data
    })
  }

  addToCart(movie:IMovies){
    this.cartService.addToCart(movie);
  }

  hasRoute(route: string){
    return this.router.url === route;
  }


}

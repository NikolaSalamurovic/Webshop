import { IMovies } from "./IMovies";

export class CartProduct{

    constructor(movie: IMovies){
        this.movie = movie;
    }
    movie:IMovies;
    quantity: number = 1;

    get price():number{
        return this.movie.price * this.quantity;
    }
}
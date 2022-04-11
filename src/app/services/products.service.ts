import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovies } from '../models/IMovies';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ProductService {


  constructor(private http: HttpClient) {}

  getProducts(): Observable<IMovies[]> {

    return this.http.get<IMovies[]>(environment.urlProducts)
  }

}



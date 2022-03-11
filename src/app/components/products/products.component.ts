import { Component, Input, OnInit, Output } from '@angular/core';
import { UsersService } from 'src/app/products.service';
import { Router } from '@angular/router';

  interface objectClass{
    id:number;
    name: string;
    price: number;
    amount: number;
    productId: number;
    imageUrl: string;
    
  }

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
  
export class ProductsComponent implements OnInit {
  
  title = 'api-test';
  data:any = [];
  savedObjects:objectClass[] = [];
  constructor(private user: UsersService, private router: Router){
    this.user.getData().subscribe( data => {
      console.warn(data);
      this.data=data
    })
    if(localStorage.getItem('savedObject') && localStorage.getItem('savedObject')!.length > 0){
        this.savedObjects = JSON.parse(localStorage.getItem('savedObject')??'');
    }
    
  }

  hasRoute(route: string){
    return this.router.url === route;
  }
  

  ngOnInit(): void {
  }
  onClick(id: number) {
    let foundObject = this.data.find(Object => Object.id === id)
    this.savedObjects.push({...foundObject});
    localStorage.setItem('savedObject',JSON.stringify(this.savedObjects));
    let array: [] = JSON.parse(localStorage.getItem('savedObject')??'');
    

    //this.savedObjects.push({...foundObject,companyId:41});
    //this.savedObjects.forEach(obj => obj = {...obj,companyId:41})
    array.forEach((obj:{title:string})=> console.log(obj.title))
    
    
  }

}

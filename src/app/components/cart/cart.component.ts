import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() savedObjects: any = [];
  @Input() foundObject: any = []
  @Input() data: any
  

  constructor(private router: Router) {
    if(localStorage.getItem('savedObject') && localStorage.getItem('savedObject')!.length > 0){
      this.savedObjects = JSON.parse(localStorage.getItem('savedObject')??'');
  }
  
    console.log(this.savedObjects)
   }
  
  
  ngOnInit(): void {
  }

  hasRoute(route: string){
    return this.router.url === route;
  }
  deleteTask(){

    console.log(this.savedObjects)
    
   //localStorage.clear();
   //location.reload();
    
    }

  
  
  
    
    
    
  

}



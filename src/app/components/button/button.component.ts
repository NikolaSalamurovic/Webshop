import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { UsersService } from 'src/app/products.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Output() btnClick = new EventEmitter();
  data:any = [];
  constructor(private user: UsersService){
    this.user.getData().subscribe( data => {
      console.warn(data);
      this.data=data
    })
  }
  


  ngOnInit(): void {
  }

  onClick() {
    console.log(this.data);
  }

}



import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
interface Users{
  id:number,
  first:string,
  last:string
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products:Array<Users> = []
  router!:Router
  constructor(private userServices:UsersService)
  {
    console.log(this.userServices.users)
    this.products = this.userServices.users
  }
}

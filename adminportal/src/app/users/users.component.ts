import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

interface Users{
  id:number,
  first:string,
  last:string
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users:Array<Users> = []
  router!:Router
  constructor(private userServices:UsersService)
  {
    console.log(this.userServices.users)
    this.users = this.userServices.users
  }
}

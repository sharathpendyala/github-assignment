import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
interface User{
  id:number,
  first:string,
  last:string
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  reactiveForm: FormGroup;
  myusers:Array<User> = this.userService.users
  idx:number= 0
  constructor(private router:Router,private userService: UsersService) {
    this.reactiveForm = new FormGroup({
      id: new FormControl(),
      firstname: new FormControl(),
      lastname: new FormControl(),
    });
  }
  obj = {
    id:0,
    first:'',
    last:''
  }
  onsubmit() {
    this.idx = this.userService.users.findIndex((obj)=> this.reactiveForm.value.id == obj.id)
    console.log(typeof(Number(this.reactiveForm.value.id)))
    this.obj.id = Number(this.reactiveForm.value.id)
    this.obj.first = this.reactiveForm.value.firstname
    this.obj.last = this.reactiveForm.value.lastname
    console.log(this.obj)
    this.userService.users.push(this.obj)
    this.router.navigateByUrl("/users")
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
interface User{
  id:number,
  first:string,
  last:string
}
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
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
  
  onsubmit() {
    this.idx = this.userService.users.findIndex((obj)=> this.reactiveForm.value.id == obj.id)
    this.userService.users[this.idx].first = this.reactiveForm.value.firstname
    this.userService.users[this.idx].last = this.reactiveForm.value.lastname
    this.router.navigateByUrl("/users")
  }
}

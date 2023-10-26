import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users = [
    {
      id:1,
      first:"abc",
      last:"xyz"
    },
    {
      id:2,
      first:"abc",
      last:"xyz"
    },
    {
      id:3,
      first:"abc",
      last:"xyz"
    },
    {
      id:4,
      first:"abc",
      last:"xyz"
    }
  ]
  change()
  {
    console.log("hello")
  }
  constructor() {
   }
}

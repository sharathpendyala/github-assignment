import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
interface Display {
  id: number;
  first: string;
  last: string;
}
@Component({
  selector: 'app-userdisplay',
  templateUrl: './userdisplay.component.html',
  styleUrls: ['./userdisplay.component.css'],
})
export class UserdisplayComponent {
  show!:Display
  constructor(
    private userService: UsersService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      let idx = userService.users.findIndex((obj) => {
        return obj.id == id;
      });
      this.show = userService.users[idx]
    });
  }
}

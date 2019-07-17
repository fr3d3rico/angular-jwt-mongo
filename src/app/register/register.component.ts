import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

import { CookieService } from 'ngx-cookie-service';

import { User } from '../model/user';

@Component({
  selector: 'app-root',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = {
    name: '',
    username: '',
    password: ''
  };

  constructor(private userService: UserService, private cookieService: CookieService) { }

  ngOnInit() {
  }

  register() {
    // console.log(this.user);
    this.userService.registerUser(this.user).subscribe(resp => {
      console.log(resp);
      if( resp ) {
        this.cookieService.set('access_token', resp.access_token);
      }
    }, error => console.log(error));
  }

}

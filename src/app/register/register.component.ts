import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    email: '',
    password: ''
  };

  constructor(private userService: UserService,
    private cookieService: CookieService,
    public router: Router) { }

  ngOnInit() {
  }

  register() {
    // console.log(this.user);
    this.userService.registerUser(this.user).subscribe(resp => {
      console.log("resp");
      if (resp.msg) {
        console.log("if");
        console.log(resp);
        // this.cookieService.set('access_token', resp.access_token);
        // this.router.navigate(['login']);
      }
      else {
        console.log("else");
        console.log(resp);
        // this.cookieService.set('access_token', resp.access_token);
        // this.router.navigate(['login']);
      }
    }, error => {
      console.log("error");
      console.log(error);
      this.router.navigate(['login']);
    });

    // this.router.navigate(['tools']);
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

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

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  register() {
    console.log(this.user);
  }

}

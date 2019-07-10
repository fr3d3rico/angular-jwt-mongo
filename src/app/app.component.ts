import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-jwt-mongo';

  constructor(private cookieService: CookieService, private userService: UserService) { }

  ngOnInit() {
    this.cookieService.set('teste', 'Fred');
  }
}

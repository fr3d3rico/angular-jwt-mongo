import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-jwt-mongo';

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    this.cookieService.set('teste', 'Fred');
  }
}

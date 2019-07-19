import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-jwt-mongo';

  constructor(private cookieService: CookieService, private router: Router) { }

  ngOnInit() {
    // this.cookieService.set('teste', 'Fred');
    console.log(this.cookieService.get('access_token'));

    if (this.cookieService.get('access_token')) {
      this.router.navigate(['tools']);
    }
    else {
      this.router.navigate(['register']);
    }
  }
}

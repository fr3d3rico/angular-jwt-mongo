import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { CookieService } from 'ngx-cookie-service';
import * as jwt_decode from 'jwt-decode';

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
    console.log( this.cookieService.get('access_token') );

    const date = new Date(0); 
    date.setUTCSeconds(jwt_decode(this.cookieService.get('access_token')).exp);
    console.log(date);
    
    
    if( this.cookieService.get('access_token') ) {
      console.log(jwt_decode(this.cookieService.get('access_token')));
      console.log(jwt_decode(this.cookieService.get('access_token')).exp);
      if(jwt_decode(this.cookieService.get('access_token')).exp === undefined) {
        this.router.navigate(['register']);
      }
      else {
        this.router.navigate(['tools']);
      }
    }
    else {
      this.router.navigate(['register']);
    }
  }
}

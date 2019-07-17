import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model/user';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://localhost:3030/register";

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<any> {
    // console.log('UserService.registerUser(user: User)');
    return this.http.post(this.url, user, {
      responseType: 'text'
    });
  }
}

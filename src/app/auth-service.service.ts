import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  user: User = {};
  response: any;

  constructor(private http: HttpClient) { }

  login(data: any): Observable<User> {
    this.response = this.http.post(`${baseUrl}/login`, data)

    this.setUser(this.response);

    return this.response;
  }

  getAllStudents(): Observable<any> {
    return this.http.get(`${baseUrl}/allStudents`);
  }

  setUser(res: any) {
    // res.subscribe((result: User) => {(result != null )? this.user = result : this.user = {}});
    res.subscribe((result: User) => {
      console.log(result);
      if (result != null) {
        this.user = result
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        this.user = {}
        localStorage.removeItem('user');
      }
    });
    
    
  }

  getUser(): User {
    return this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }

  getIsLoggedIn(): boolean {
    if (localStorage.getItem('user')!= null ) {
      return true;
    }
    return false;
  }

  logout() {
    this.user = {};
    localStorage.removeItem('user');
  }

}

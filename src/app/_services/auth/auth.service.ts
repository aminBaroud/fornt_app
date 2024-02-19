import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../_models/user';
import { UserToken } from '../../_models/user-token';
import { dev } from '../../environments/dev';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject: BehaviorSubject<UserToken | null>;
  public userToken: Observable<UserToken | null>;

  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject(
      JSON.parse(localStorage.getItem('user')!)
    );
    this.userToken = this.userSubject.asObservable();
  }

  public get userValue() {
    return this.userSubject.value;
  }

  public get isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  signup(user: User) {
    return this.http.post<User>(`${dev.apiUrl}/auth/signup`, user).pipe(
      map((data) => {
        console.log('user data from server ==> ', data);
        return data;
      })
    );
  }

  login(email: string, password: string) {
    return this.http
      .post<any>(`${dev.apiUrl}/auth/login`, { email, password })
      .pipe(
        map((data) => {
          localStorage.setItem(
            'access_token',
            JSON.stringify(data.tokens.access_token)
          );
          localStorage.setItem(
            'refresh_token',
            JSON.stringify(data.tokens.refresh_token)
          );
          localStorage.setItem('isConnected', 'true');
          //localStorage.setItem('first_name', data.user.first_name);
          localStorage.setItem('user', JSON.stringify(data.user));
          this.userSubject.next(data.tokens.access_token);
          return data.tokens.access_token;
        })
      );
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('isConnected');
    localStorage.removeItem('user');
    this.http.get<any>(`${dev.apiUrl}/auth/logout`).pipe();
    this.router.navigate(['/aboutUs']);
  }

  refreshAccessToken(refresh_token: string) {
    return this.http.get<any>(`${dev.apiUrl}/auth/refresh`);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// User interface
export class User {
  name: String | undefined;
  email: String | undefined;
  password: String | undefined;
  password_confirmation: String | undefined
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  // User registration
  register(user: User): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/auth/register', user);
  }

  // Login
  signin(user: User): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/auth/login', user);
  }

  // Access user profile
  profileUser(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/auth/user-profile');
  }

  sendResetPasswordLink(user: User): Observable<any> {
      return this.http.post('http://127.0.0.1:8000/api/auth/reset-password-request', user)
  }

  resetPassword(user: User): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/auth/change-password', user)
  }

}

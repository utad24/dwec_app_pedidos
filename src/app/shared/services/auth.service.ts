import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { tap } from 'rxjs';
import { LoginResponse } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string) {
    return this.http.post<LoginResponse>(`${environment.apiUrl}/auth/local`, { identifier: email, password }).pipe(
      tap((response: LoginResponse) => {
        if (response.jwt) {
          localStorage.setItem(this.TOKEN_KEY, response.jwt);
          this.router.navigate(['/admin']);
        }
      })
    );
  }

  isAuthenticated() {
    return this.getToken() !== null;
  }

  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/']);
  }

}

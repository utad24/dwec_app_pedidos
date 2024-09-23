import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

export const loggedInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated() && !req.url.includes('auth')) {
    const token = authService.getToken(); // Retrieve the token from the auth service
    if (token) { // Ensure the token is not null or undefined
      const clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Interceptor: token added');
      return next(clonedRequest)
        .pipe(
          catchError((error: HttpErrorResponse) => {
            if (error.status === 401) {
              // Handle 401 error
              console.error('Unauthorized request - redirecting to login');
              authService.logout(); // Optionally, log out the user
              // Redirect to login page or show a login modal

              router.navigate(['/']);
            }
            return throwError(() => {
              console.log("throwError", error);
              return error
            });
          })
        );
    } else {
      console.error('Token is null or undefined');
    }
  }

  console.warn('Interceptor');
  return next(req)
};

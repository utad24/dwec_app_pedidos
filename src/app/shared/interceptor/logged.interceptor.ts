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
    const token = authService.getToken();
    if (token) {
      const clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

      return next(clonedRequest)
        .pipe(
          catchError((error: HttpErrorResponse) => {
            if (error.status === 401) {
              // Handle 401 error, cuando el token expira
              console.error('Unauthorized request - redirecting to login');
              authService.logout();
              router.navigate(['/']);
            }
            return throwError(() => {
              console.log("throwError", error);
              return error
            });
          })
        );
    }
  }

  return next(req)
};

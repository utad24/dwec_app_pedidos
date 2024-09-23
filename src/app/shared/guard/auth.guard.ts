import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  console.log('Auth Guard: Checking authentication status...');
  if (authService.isAuthenticated()) {
    console.log('Auth Guard: User is authenticated');
    return true;
  } else {
    console.log('Auth Guard: User is not authenticated, redirecting to home');
    router.navigate(['/']);
    return false;
  }
};

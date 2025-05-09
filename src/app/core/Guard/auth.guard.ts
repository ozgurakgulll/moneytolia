import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import {AuthService} from '../Services/auth.services';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);

  const router = inject(Router);

  return authService.isLoggedIn().pipe(
    map(isLoggedIn => {
      if (isLoggedIn) {
        return true;
      } else {
        router.navigate(['/login']);
        return false;
      }
    })
  );
};

export const loginGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isLoggedIn().pipe(
    map(isLoggedIn => {
      if (isLoggedIn) {
        router.navigate(['/campaigns']);
        return false;
      } else {
        return true;
      }
    })
  );
};

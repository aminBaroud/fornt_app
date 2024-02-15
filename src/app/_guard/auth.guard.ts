import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token: string | null =
    localStorage.getItem('access_token') &&
    localStorage.getItem('access_token') != null
      ? localStorage.getItem('access_token')
      : '';
  console.log('token data :', token);

  if (token != '') {
    return true;
  } else {
    inject(Router).navigate(['/auth/login']);
    return false;
  }
};

import { inject } from '@angular/core';
import { CanActivateFn , Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token:any =  localStorage.getItem("currentUser") && localStorage.getItem("currentUser")!=null ? localStorage.getItem("currentUser") :'';
  console.log("token data :" ,token);

  if (token != '') {
    return true;
  } else {
    inject(Router).navigate(['/auth/login']);
    return false;
  }

};

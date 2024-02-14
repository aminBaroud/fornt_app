import { inject } from '@angular/core';
import { CanActivateFn , Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token:any =  localStorage.getItem("accessToken") && localStorage.getItem("accessToken")!=null ? localStorage.getItem("accessToken") :'';
  console.log("token data :" ,token);

  if (token != '') {
    return true;
  } else {
    inject(Router).navigate(['/auth/login']);
    return false;
  }

};

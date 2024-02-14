import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { dev } from '../environments/dev';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('in intercpetor', dev.apiUrl + req.url);

    // don't add header for this endpoints

    if (req.url.includes('login') || req.url.includes('register')) {
      return next.handle(req);
    }

    const token: any =
      localStorage.getItem('access_token') &&
      localStorage.getItem('access_token') != null
        ? localStorage.getItem('access_token')
        : '';
    req = req.clone({
      headers: req.headers.set('access_token', token),
      url: dev.apiUrl + req.url,
    });

    return next.handle(req);
  }
}

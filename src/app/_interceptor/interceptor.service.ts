import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

import { dev } from '../environments/dev';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log("in intercpetor" , dev.apiUrl + req.url);

      const token:any =  localStorage.getItem("currentUser") && localStorage.getItem("currentUser")!=null ? localStorage.getItem("currentUser") :'';
      req = req.clone({
      headers: req.headers.set(
          "x-access-token",
          token
      ),
      url: dev.apiUrl + req.url
      });

    return next.handle(req);
  }
}

import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {KeycloackSecurityService} from './keycloack-security.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeycloackHttpInterceptorService implements  HttpInterceptor{

  constructor(private kcService: KeycloackSecurityService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Interceptor"+req);
    if(!this.kcService.kc.authenticated) return next.handle(req);
    let request =req.clone({
      setHeaders: {
        Authorization: "Bearer"+this.kcService.kc.token
      }
    });
    return next.handle(request);
  }
}

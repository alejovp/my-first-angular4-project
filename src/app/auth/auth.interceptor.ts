import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  
  constructor(private authService: AuthService) {}
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted!', req);
    
    // To append new data to the header or update something(set):
    // const copiedReq = req.clone({ headers: req.headers.append('', '') });
    
    // To work with the request params:
    const copiedReq = req.clone({ params: req.params.set('auth', this.authService.getToken()) });
    return next.handle(copiedReq);
  }
}
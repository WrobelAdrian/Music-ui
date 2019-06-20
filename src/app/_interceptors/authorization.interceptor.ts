import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        authorization: `${this.cookieService.get('token')}`
      }
    });
    return next.handle(request);
  }
}

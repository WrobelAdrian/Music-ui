import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CredentialsInterface} from '../../../_interfaces/credentials.interface';
import {environment} from '../../../../environments/environment';
import {ApiEndpoints} from '../../../_enums/api-endpoints.enum';
import {Observable} from 'rxjs';
import {UserInterface} from '../../../_interfaces/user.interface';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {AppRouterLinks} from '../../../app-routing.config';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient,
              private cookies: CookieService,
              private router: Router) {}

  public login(credentials: CredentialsInterface): Observable<any> {
    return this.http.post(`${environment.apiUrl}${ApiEndpoints.LOGIN}`, credentials);
  }

  public register(user: UserInterface): Observable<any> | any {
    return this.http.post(`${environment.apiUrl}${ApiEndpoints.REGISTER}`, user);
  }

  public logout(): void {
    this.cookies.delete('token');
    this.router.navigate(AppRouterLinks.LOGIN);
  }

  isAuthenticated(): boolean {
    return this.cookies.check('token');
    // TODO: backend
  }
}

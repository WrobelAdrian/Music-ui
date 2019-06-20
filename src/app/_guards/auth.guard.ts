import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../modules/auth/services/auth.service';
import {AppRouterLinks} from '../app-routing.config';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate(): boolean {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(AppRouterLinks.LOGIN);
      return false;
    }
    return true;
  }
}

import {Injectable} from '@angular/core';
import {CanActivateChild, Router} from '@angular/router';
import {AuthService} from '../modules/auth/services/auth.service';
import {AppRouterLinks} from '../app-routing.config';

@Injectable()
export class AuthGuard implements CanActivateChild {

  constructor(private authService: AuthService,
              private router: Router) {}

  canActivateChild(): boolean {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(AppRouterLinks.LOGIN);
      return false;
    }
    return true;
  }
}

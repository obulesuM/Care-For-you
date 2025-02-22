import { Injectable } from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { ROLES } from '@app/_const';
import { UserService } from '@app/_services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  userRole = '';
  constructor(private user: UserService, private router: Router) {
    this.userRole = this.user.getUserRole();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<any> {
    if (this.userRole && this.userRole == ROLES.USER) {
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }
}

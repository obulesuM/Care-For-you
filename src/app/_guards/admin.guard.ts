import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { ROLES } from '@app/_const/app.const';
import { UserService } from '@app/_services';

export const adminGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const user = inject(UserService);
  const router: Router = inject(Router);
  const role = user.getUserRole();
  const isAuthenticated = user.getUserAuthenticated();

  if (isAuthenticated && role && role == ROLES.ADMIN) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};

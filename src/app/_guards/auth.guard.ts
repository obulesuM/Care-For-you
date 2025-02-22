import { Inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ROLES } from '@app/_const';
import { UserService } from '@app/_services';

export const authGuard: CanActivateFn = (route, state) => {
  const user: UserService = Inject(UserService);
  const router: Router = Inject(Router);
  let userData: any = localStorage.getItem('user');
  if (!userData) {
    router.navigate(['/login']);
    return false;
  }
  const userInfo = JSON.parse(userData);
  if (!userInfo) {
    router.navigate(['/login']);
    return false;
  }
  const userRole = userInfo && userInfo['role'] ? userInfo['role'] : null;
  if (!userRole) {
    router.navigate(['/login']);
    return false;
  }

  if (userRole && userRole == ROLES.USER) {
    return true;
  }
  router.navigateByUrl('/login');
  return false;
};

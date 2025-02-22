import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Role } from '../_models/role';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public userRole: BehaviorSubject<string> = new BehaviorSubject('');
  public userDta: BehaviorSubject<any> = new BehaviorSubject(null);
  public appPlatform: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() {}

  public getUserAuthenticated(): boolean {
    let userData: any = localStorage.getItem('user');
    if (!userData) return false;
    const userInfo = JSON.parse(userData);
    if (!userInfo) return false;
    const token = userInfo && userInfo['token'] ? userInfo['token'] : null;
    if (!token) return false;
    this.isAuthenticated.next(true);
    return true;
  }

  public setIsUserAuthenticated(authenticated: boolean) {
    this.isAuthenticated.next(authenticated);
  }

  public setUserRole(role: any) {
    this.userRole.next(role);
  }

  getUserRole(): any {
    let userData: any = localStorage.getItem('user');
    if (!userData) return null;
    const userInfo = JSON.parse(userData);
    if (!userInfo) return null;
    const userRole = userInfo && userInfo['role'] ? userInfo['role'] : null;
    if (!userRole) return null;
    this.userRole.next(userRole);
    return userRole;
  }

  public setUserData(user: any) {
    this.userDta.next(user);
  }

  public getUserData() {
    let userData: any = localStorage.getItem('user');
    if (!userData) return null;
    const userInfo = JSON.parse(userData);
    if (!userInfo) return null;
    return userInfo;
  }

  public getPlatForm() {
    return this.appPlatform.value;
  }

  public setPlatform(platform: string) {
    this.appPlatform.next(platform);
  }
}

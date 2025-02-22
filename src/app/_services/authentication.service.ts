import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { ToasterService } from '@app/_services/toaster.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private userSubject: BehaviorSubject<User> | any;
  public user: Observable<User>;

  constructor(
    private router: Router,
    private http: HttpClient,
    private toast: ToasterService
  ) {
    const det: any = localStorage.getItem('user');
    const userdet: User = JSON.parse(det);
    this.userSubject = new BehaviorSubject<User>(userdet);
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  public login(username: string, password: string): Observable<any> {
    const payload = {
      email: username,
      password: password,
    };
    return new Observable((observer) => {
      this.http.post(`${environment.apiUrl}/api/login`, payload).subscribe(
        (response: any) => {
          if (response['status'] == 'SUCCESS') {
            localStorage.setItem('user', JSON.stringify(response['data']));
            this.userSubject.next(response['data']);
            return observer.next(response['data']);
          }
          return observer.error();
        },
        (_) => observer.error()
      );
    });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }
}

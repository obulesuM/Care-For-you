import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';

import { environment } from '@environments/environment';
import {
  AuthenticationService,
  LoadingService,
  UserService,
} from '@app/_services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private user: UserService, private loading: LoadingService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add auth header with jwt if user is logged in and request is to api url
    const user = this.user.getUserData();
    const isLoggedIn = this.user.getUserAuthenticated();
    const isApiUrl = request.url.startsWith(environment.apiUrl);
    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${user.token}`,
        },
      });
    }
    this.loading.show();
    return next
      .handle(request)
      .pipe(
        catchError((err) => {
          //this._loading.setLoading(false, request.url);
          console.log('EROR IS GOING');
          this.loading.dismiss();
          return err;
        })
      )
      .pipe(
        map<any, any>((evt: HttpEvent<any>) => {
          if (evt instanceof HttpResponse) {
            console.log('I AM IN', evt);
            this.loading.dismiss();
            // this._loading.setLoading(false, request.url);
          }
          return evt;
        })
      );
  }
}

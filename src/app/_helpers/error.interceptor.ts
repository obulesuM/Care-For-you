import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AuthenticationService, ToasterService } from '@app/_services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private authenticationService: AuthenticationService,
    private toast: ToasterService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if ([401, 403].indexOf(err.status) !== -1) {
          // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
          console.log('LOOUT WILL GO HEREEEE');
          this.authenticationService.logout();
        }
        if ([400].indexOf(err.status) !== -1) {
          this.toast.error(
            err.error.message || err.statusText || 'soethin went wrong',
            'bottom'
          );
        }
        const error = err.error.message || err.statusText;
        return throwError(error);
      })
    );
  }
}

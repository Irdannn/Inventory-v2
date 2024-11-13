import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
import { TokenApiModel } from '../models/token-api.model';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private auth: AuthService,
    private toast: NgToastService,
    private router: Router
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const myToken = this.auth.getToken();

    if (myToken) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${myToken}` }
      });
    }

    return next.handle(request).pipe(
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse && err.status === 401) {
          // Attempt to handle unauthorized error by refreshing the token
          return this.handleUnAuthorizeError(request, next);
        }
        // For other errors, throw an error with a message
        return throwError(() => new Error("Some other error occurred"));
      })
    );
  }

  private handleUnAuthorizeError(req: HttpRequest<any>, next: HttpHandler) {
    const tokenApiModel = new TokenApiModel();
    tokenApiModel.accessToken = this.auth.getToken()!;

    return this.auth.renewToken(tokenApiModel).pipe(
      switchMap((data: TokenApiModel) => {
        // Store the new token and retry the failed request with the new token
        this.auth.storeToken(data.accessToken);
        req = req.clone({
          setHeaders: { Authorization: `Bearer ${data.accessToken}` }
        });
        return next.handle(req);
      }),
      catchError((err) => {
        // If token refresh fails, show a warning and navigate to login
        this.toast.warning({ detail: "Warning", summary: "Token is expired, please log in again" });
        this.router.navigate(['login']);
        return throwError(() => new Error("Token renewal failed"));
      })
    );
  }
}

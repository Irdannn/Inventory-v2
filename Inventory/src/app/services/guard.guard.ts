import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthapiService } from './authapi.service';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(
    private auth: AuthapiService,
    private route: Router,
    private toast: NgToastService
  ) {

  }

  canActivate():boolean {
    if(this.auth.isLoggedIn()){
      return true
    } else {
      this.toast.error({detail:"ERROR", summary: "Silakan Login terlebih dahulu"})
      this.route.navigate(['login'])
      return false;
    }
  }
}
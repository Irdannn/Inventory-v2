import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthapiService } from 'src/app/services/authapi.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  status = false;
  public role! : string;

  constructor(
    private Route: Router,
    private userStore : UserStoreService,
    private auth : AuthapiService,
    private toast : NgToastService
    ) {}

  ngOnInit(): void {
    this.userStore.getFullNameFromStore()
    .subscribe(val=> {
      // const rolefromToken = this.auth.getRoleFromToken();
      // this.role = val || rolefromToken
    })
  }

  logout(){
    localStorage.removeItem('token');
    this.Route.navigate(['login']);
    this.toast.success({detail: "TERIMAKASIH", summary:"Logout Berhasil", duration: 5000});
  }

  clickEvent(){
    this.status = !this.status;       
  }
}

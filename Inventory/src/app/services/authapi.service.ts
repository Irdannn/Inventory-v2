import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Users } from '../models/users';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthapiService {

  redirectUrl!: string;
  private baseurl = "https://inventory.insanmuliamalang.sch.id/authapi/";
  private userPayLoad:any;

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private http : HttpClient, 
    private router: Router) { }

    public signUp(
      username:any,
      nama_lengkap: any,
      role: any,
      email: any,
      password: any
      ) {
      return this.http.post<any>(this.baseurl + 'registrasi.php', {
        username, nama_lengkap, role, email, password
      })
      .pipe(map(Users => {
        return Users;
      }));
    }
  
    public login( username: any, password:any) {
      return this.http.post<any>(this.baseurl + 'login.php', {
        username, password
      })
      .pipe(map(Users =>{
        this.storeToken(Users.username);
        this.getLoggedInName.emit(true);
        return Users;
      }));
    }
  
    storeToken(token:string){
      localStorage.setItem('token', token)
    }

    getToken(){
      return localStorage.getItem('token');
    }

    deleteToken(){
      localStorage.removeItem('token');
    }

    isLoggedIn() {
      const usertoken = this.getToken();
      if (usertoken != null){
        return true
      } else{
        return false
      }
    }

    getfullNameFromToken(): any{
      if(this.userPayLoad)
      return this.userPayLoad.unique_name;
    }
  
    getRoleFromToken(){
      if(this.userPayLoad)
      return this.userPayLoad.role;
    }
  }

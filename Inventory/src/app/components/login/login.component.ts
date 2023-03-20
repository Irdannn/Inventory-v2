import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/helpers/validateform';
import { AuthapiService } from 'src/app/services/authapi.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  angForm!:FormGroup;

  type = "password";
  isText = false;
  eyeIcon = "fa-eye-slash";
  //loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private auth: AuthapiService, 
    private router : Router,
    private toast: NgToastService,
    //private userStore: UserStoreService,
    //private http: HttpClient
  ) {
    this.angForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  postdata(angForm:any){
    if(this.angForm.valid) {
      this.auth.login(
        angForm.value.username,
        angForm.value.password
      )
      .pipe(first())
      .subscribe(
        data=> {
          if (data.message=="success"){
          this.router.navigate(['/dashboard']);
          this.toast.success({detail: "ASSALAMUALAIKUM", summary:"Login Berhasil", duration: 5000});
          } else if (data.message=="error") {
            this.toast.error({detail: "ERROR", summary:"Username atau Password salah", duration: 5000});
          }
        // }
        // ,error => {
        //   this.toast.error({detail: "ERROR", summary:"Username atau Password salah", duration: 5000});
        }
      )
    }else {
      ValidateForm.validateAllformsFields(this.angForm);
      this.toast.error({detail: "ERROR", summary:"Mohon isi Password dan Username", duration: 5000});
    }
  }

  // onLogin(){
  //   if(this.loginForm.valid) {
  //     console.log(this.loginForm.value)
  //     this.auth.login(this.loginForm.value)
  //     .subscribe({
  //       next:(res)=>{  
  //         console.log(res.message);        
  //         this.loginForm.reset();
  //         this.auth.storeToken(res.accessToken);
  //         this.auth.storeRefreshToken(res.refreshToken);
  //         const tokenPayload = this.auth.decodedToken();
  //         this.userStore.setFullNameForStore(tokenPayload.unique_name);
  //         this.userStore.setRoleForStore(tokenPayload.role);
  //         this.toast.success({detail: "ASSALAMUALAIKUM", summary:"Login Berhasil", duration: 5000});
  //         this.router.navigate(['dashboard'])
  //       },
  //       error:(err)=>{
  //         this.toast.error({detail: "ERROR", summary:"Username atau Password salah", duration: 5000});
  //         console.log(err);
  //       }        
  //     })
  //   } else {
  //     ValidateForm.validateAllformsFields(this.loginForm);
  //     this.toast.error({detail: "ERROR", summary:"Mohon isi Password dan Username", duration: 5000});
  //   }
  // }
}
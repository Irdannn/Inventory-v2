import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators, NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/helpers/validateform';
import { AuthapiService } from 'src/app/services/authapi.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-signups',
  templateUrl: './signups.component.html',
  styleUrls: ['./signups.component.css']
})
export class SignupsComponent implements OnInit {
  angForm!: FormGroup;

  type ="password";
  isText =false;
  eyeIcon = "fa-eye-slash";

  constructor(
    private fb: FormBuilder, 
    private auth: AuthapiService, 
    private router : Router,
    private toast : NgToastService,
  ) {
    this.angForm = this.fb.group({
      username: ['', Validators.required],
      nama_lengkap: ['', Validators.required],
      role: [''],
      email: ['', Validators.required],
      password: ['', Validators.required]
  })}

  ngOnInit(): void {
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  postdata(angForm:any){
    if(this.angForm.valid) {
      this.auth.signUp(
        angForm.value.username,
        angForm.value.nama_lengkap,
        angForm.value.role,
        angForm.value.email,
        angForm.value.password
      )
      .pipe(first())
      .subscribe( data => {
        this.toast.success({detail: "SUCCESS", summary:"Pendaftaran berhasil", duration: 5000});
        this.angForm.reset();
        this.router.navigate(['dashboard']);
      },
    error => {
      this.toast.error({detail: "ERROR", summary:"Oops, ada yang salah", duration: 5000});
      })
    }else {
      console.log("form is not valid")
      ValidateForm.validateAllformsFields(this.angForm);
      this.toast.error({detail: "ERROR", summary:"Mohon isi semua bidang", duration: 5000});
    }
  }
}
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { BarangApiService } from 'src/app/services/barang-api.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { Barang } from 'src/app/models/barang';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
// import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
// import { SopComponent } from '../sop/sop.component';

@Component({
  selector: 'app-soptabel',
  templateUrl: './soptabel.component.html',
  styleUrls: ['./soptabel.component.css']
})
export class SopTableComponent {
  public listBarang = [];
  searchText!: string;
  barang!: Barang;

  public users:any = [];
  public role!:string;
  public fullName:string = "";

  getRuangan!: FormGroup;

  constructor(
    private authapi : ApiService, 
    private auth: AuthService,
    private userStore: UserStoreService,
    private api : BarangApiService,
    private router : Router,
    private cari : BarangApiService,
    private toast : NgToastService,
    private fb : FormBuilder,
    ) { }


  ngOnInit() {
    this.authapi.getUsers()
    .subscribe(res=>{
      this.users = res;
    })
    this.userStore.getFullNameFromStore()
    .subscribe(val=> {
      const rolefromToken = this.auth.getRoleFromToken();
      this.role = val || rolefromToken
    })
    this.api.getAllInventory()
    .subscribe(res => {
      this.listBarang = res;
    });
    this.getRuangan = this.fb.group({
      tempat: ['']
    })
  }
  cariTempat() {
    this.cari.getInventorybytempat(this.getRuangan.value)
    .subscribe({
      next:()=>{
        //this.router.navigate(['soptable', barang.tempat])
      },
      error:()=>{
        this.toast.error({detail: "ERROR", summary:"Oops, ada Api yang salah!", duration: 5000});
      }
    })
  }
}

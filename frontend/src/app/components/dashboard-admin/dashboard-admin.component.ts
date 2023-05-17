import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { BarangApiService } from 'src/app/services/barang-api.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { Barang } from 'src/app/models/barang';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  public listBarang = [];
  searchText!: string;
  barang: any;

  public users:any = [];
  public role!:string;

  public fullName:string = "";
  constructor(
    private authapi : ApiService, 
    private auth: AuthService,
    private userStore: UserStoreService,
    private api : BarangApiService
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
  }

  logout() {
    this.auth.signOut();
  }
}

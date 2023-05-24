import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Barang } from 'src/app/models/barang';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { BarangApiService } from 'src/app/services/barang-api.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-sop-ruangan',
  templateUrl: './sop-ruangan.component.html',
  styleUrls: ['./sop-ruangan.component.css']
})
export class SopRuanganComponent implements OnInit {
  listBarang!: Barang; // Update the type to Barang[]
  routeSubscription!: Subscription;
  searchText!: string;
  barang!: Barang;

  public users:any = [];
  public role!:string;
  public fullName:string = "";
  
  constructor(
    private authapi : ApiService, 
    private auth: AuthService,
    private userStore: UserStoreService,
    private productService : BarangApiService,
    // private dialog: MatDialog,
    private route : ActivatedRoute,
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
    });
    this.routeSubscription = this.route.paramMap.subscribe((params) => {
      const tempat = params.get('tempat');
      if (tempat) {
        this.productService.getInventorybytempat(tempat).subscribe(
          (res: Barang) => { 
            this.listBarang = res;
          },
          (error) => {
            console.log(error); 
          }
        );
      }
    });
  }
}

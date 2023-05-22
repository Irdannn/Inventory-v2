import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { BarangApiService } from 'src/app/services/barang-api.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { Barang } from 'src/app/models/barang';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SopComponent } from '../sop/sop.component';

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
  constructor(
    private authapi : ApiService, 
    private auth: AuthService,
    private userStore: UserStoreService,
    private api : BarangApiService,
    private dialog: MatDialog
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

  openForm(barang : any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { barang };

    this.dialog.open(SopComponent, dialogConfig);
    this.api.getInventory(barang)
          .subscribe({
            next: (response) => {
              this.barang = response;
        }
          })
  }
}

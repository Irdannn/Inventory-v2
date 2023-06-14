import { Component, OnInit } from '@angular/core';
import { Barang } from 'src/app/models/barang';
import { BarangApiService } from 'src/app/services/barang-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserStoreService } from 'src/app/services/user-store.service';
import { AuthService } from 'src/app/services/auth.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  barang:Barang  = new Barang();
  public role! : string;

  constructor(
    private api: BarangApiService,
    private route : ActivatedRoute,
    private router : Router,
    private userStore : UserStoreService,
    private auth : AuthService,
    private toast : NgToastService
    ) { 
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const idBarang = params.get('idBarang');
        if (idBarang) {
          this.api.getInventory(idBarang)
          .subscribe({
            next: (response) => {
              this.barang = response;
            }
          })
        }
      }
    });
  }


  updateInventory(){
    this.api.updateBarang(this.barang.id, this.barang)
    .subscribe({
      next: () => {
        this.router.navigate(['allinventory'])
        this.toast.success({detail: "BERHASIL", summary:"Barang berhasil dirubah", duration: 5000});
      },
      error:()=> {
        //this.toast.error({detail: "Error", summary:"Gagal update barang", duration: 5000});
      }
    })
  }

  deleteInventory(id_barang: number) {
    this.api.deleteBarang(id_barang)
    .subscribe({
      next: () => {
        this.router.navigate(['allinventory']);
        this.toast.success({detail: "BERHASIL", summary:"Barang berhasil dihapus", duration: 5000});
      },
      error:()=> {
        this.toast.error({detail: "Error", summary:"Gagal menghapus", duration: 5000});
      }
    })
  }
}
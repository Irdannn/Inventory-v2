import { Component, OnInit } from '@angular/core';
import { Barang } from 'src/app/models/barang';
import { ServiceBarangApi } from 'src/app/services/barangApi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserStoreService } from 'src/app/services/user-store.service';
import { AuthapiService } from 'src/app/services/authapi.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-viewedit',
  templateUrl: './viewedit.component.html',
  styleUrls: ['./viewedit.component.css']
})
export class ViewEditComponent implements OnInit {
  barang:Barang  = new Barang();
  public role! : string;

  barangDetail: Barang = {
    id_barang: 0,
    nama_barang:"",
    fasilitas:"",
    tempat:"",
    jenis:"",
    tahun:0,
    dana:"",
    sifat:"",
    kondisi:"",
    jumlah:0,
    harga: 0,
    waktumeminjam:"yyyy-MM-dd",
    waktukembali:"yyyy-MM-dd",
    user: "",
    aksesoris:""
  }

  constructor(
    private api: ServiceBarangApi,
    private route : ActivatedRoute,
    private router : Router,
    private userStore : UserStoreService,
    private auth : AuthapiService,
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
              this.barangDetail = response;
            }
          })
        }
      }
    });

    this.userStore.getFullNameFromStore()
    .subscribe(val=> {
      //const rolefromToken = this.auth.getRoleFromToken();
      //this.role = val || rolefromToken
    })
  }

  // updateInventory() {
  //   this.api.updateBarang(this.barang).subscribe(() => {
  //     console.log('Product updated successfully!');
  //   });
  // }

  updateInventory(){
    console.log(this.barangDetail);
    this.api.updateBarang(this.barangDetail.id_barang, this.barangDetail)
    .subscribe({
      next: () => {
        this.router.navigate(['allinventory'])
        this.toast.success({detail: "BERHASIL", summary:"Barang berhasil dirubah", duration: 5000});
      },
      error:()=> {
        this.toast.error({detail: "Error", summary:"Gagal update barang", duration: 5000});
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
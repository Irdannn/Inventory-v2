import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ServiceBarangApi } from 'src/app/services/barangApi.service';
import { Barang } from 'src/app/models/barang';

@Component({
  selector: 'app-peminjaman',
  templateUrl: './peminjaman.component.html',
  styleUrls: ['./peminjaman.component.css']
})
export class PeminjamanComponent implements OnInit {

  barang:Barang  = new Barang();

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
    private router : Router,
    private toast : NgToastService,
    private route: ActivatedRoute,
  ){}

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
    })
  }

  updateInventory(){
    this.api.updateBarang(this.barangDetail.id_barang, this.barangDetail)   
    .subscribe({
      next: () => {
        this.router.navigate(['dashboard']);
        this.toast.success({detail: "SUCCESS", summary:"Peminjaman berhasil disimpan", duration: 5000});
      }
    })
  }
}
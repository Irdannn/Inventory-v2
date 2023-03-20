import { Component, OnInit } from '@angular/core';
import { ServiceBarangApi } from 'src/app/services/barangApi.service';
import { ActivatedRoute } from '@angular/router';
import { Barang } from 'src/app/models/barang';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
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
    private route : ActivatedRoute,
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
}

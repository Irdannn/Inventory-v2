import { Component, OnInit } from '@angular/core';
import { ServiceBarangApi } from 'src/app/services/barangApi.service';
import { ActivatedRoute } from '@angular/router';
import { Barang } from 'src/app/models/barang';

@Component({
  selector: 'app-printcard',
  templateUrl: './printcard.component.html',
  styleUrls: ['./printcard.component.css']
})
export class PrintcardComponent implements OnInit {
  
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
          //call api
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

  printThisPage(){
    window.print();
  }
}



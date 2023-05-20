import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Barang } from 'src/app/models/barang';
import { BarangApiService } from 'src/app/services/barang-api.service';

@Component({
  selector: 'app-printcard',
  templateUrl: './printcard.component.html',
  styleUrls: ['./printcard.component.css']
})
export class PrintcardComponent implements OnInit {
  barang:Barang  = new Barang();
  qrData: string = `https://inventory.insanmuliamalang.sch.id/view/${this.barang.id}`;
  qrCodeImage!: string;

  constructor(
    private api: BarangApiService,
    private route : ActivatedRoute,
  ){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const idBarang = params.get('idBarang');
        if (idBarang) {
          //call api
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

  printThisPage(){
    window.print();
  }
}

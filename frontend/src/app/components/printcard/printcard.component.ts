import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Barang } from 'src/app/models/barang';
import { BarangApiService } from 'src/app/services/barang-api.service';
import * as QRCodeGenerator from 'qrcode-generator';

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
    const qr = QRCodeGenerator(4, 'L');
    qr.addData(this.qrData);
    qr.make();

    this.qrCodeImage = qr.createDataURL();
  }

  printThisPage(){
    window.print();
  }
}

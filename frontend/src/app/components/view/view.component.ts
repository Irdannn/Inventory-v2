import { Component, OnInit } from '@angular/core';
import { BarangApiService } from 'src/app/services/barang-api.service';
import { ActivatedRoute } from '@angular/router';
import { Barang } from 'src/app/models/barang';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  barang:Barang  = new Barang();

  constructor(
    private api: BarangApiService,
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
              this.barang = response;
            }
          })
        }
      }
    })
  }
}

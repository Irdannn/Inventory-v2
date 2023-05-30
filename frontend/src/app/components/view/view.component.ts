import { Component, OnInit } from '@angular/core';
import { BarangApiService } from 'src/app/services/barang-api.service';
import { ActivatedRoute } from '@angular/router';
import { Barang } from 'src/app/models/barang';
import { HttpClient } from '@angular/common/http';
import { Picture } from 'src/app/models/picture';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  barang:Barang  = new Barang();
  picture:Picture = new Picture();

  constructor(
    private api: BarangApiService,
    private route : ActivatedRoute,
    private http : HttpClient
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
              //this.loadPicture()
            }
          })
        }
      }
    })
  }
}

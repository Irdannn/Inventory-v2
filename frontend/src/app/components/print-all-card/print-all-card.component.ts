import { Component, OnInit } from '@angular/core';
import { BarangApiService } from 'src/app/services/barang-api.service';

@Component({
  selector: 'app-print-all-card',
  templateUrl: './print-all-card.component.html',
  styleUrls: ['./print-all-card.component.css']
})
export class PrintAllCardComponent implements OnInit {
  searchText!: string;
  // public listBarang= [];
  listBarang: any[] = [];

  barang: any;
  constructor(
    private api : BarangApiService  
  ) { }

  ngOnInit(): void {
    this.api.getAllInventory()
    .subscribe(res => {
      this.listBarang = res;     
    });
  }

  printThisPage(){
    window.print();
  }
}

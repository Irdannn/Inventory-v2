import { Component, OnInit } from '@angular/core';
import { AlurBarang } from 'src/app/models/alurbarang';
import { Laporan } from 'src/app/models/laporan';
import { AlurbarangService } from 'src/app/services/alurbarang.service';
import { LaporanService } from 'src/app/services/laporan.service';
import *as XLSX from 'xlsx';

@Component({
  selector: 'app-data-laporan',
  templateUrl: './data-laporan.component.html',
  styleUrls: ['./data-laporan.component.css']
})
export class DataLaporanComponent implements OnInit {
  public listLaporan = [];
  lapor!:Laporan;
  
  searchText!: string;
  fileName='Data Peminjaman dan Laporan.xlsx';

  constructor ( 
    private api: LaporanService
  ){}

  ngOnInit(): void {
    this.api.getAllLaporan()
    .subscribe(res => {
      this.listLaporan = res;
    });
  }

  exportedexcel(): void{
    const element = document.getElementById('product');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element)
  
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet');
    XLSX.writeFile(wb, this.fileName);
  }
  
  key ='id';
  reverse=false;
  sort(key:string){
    this.key=key;
    this.reverse=!this.reverse;
  }
}

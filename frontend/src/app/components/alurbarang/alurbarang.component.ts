import { Component, OnInit } from '@angular/core';
import { AlurBarang } from 'src/app/models/alurbarang';
import { AlurbarangService } from 'src/app/services/alurbarang.service';
import *as XLSX from 'xlsx';

@Component({
  selector: 'app-alurbarang',
  templateUrl: './alurbarang.component.html',
  styleUrls: ['./alurbarang.component.css']
})
export class AlurBarangComponent implements OnInit {
  public listAlur = [];
  alur!: AlurBarang;
  
  searchText!: string;
  fileName='Data Peminjaman dan Laporan.xlsx';

  constructor ( 
    private api: AlurbarangService
  ){}

  ngOnInit(): void {
    this.api.getAllalurbarang()
    .subscribe(res => {
      this.listAlur = res;
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

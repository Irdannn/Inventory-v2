import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { BarangApiService } from 'src/app/services/barang-api.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import *as XLSX from 'xlsx';
import { Barang } from 'src/app/models/barang';
// import { Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-inventory',
  templateUrl: './all-inventory.component.html',
  styleUrls: ['./all-inventory.component.css']
})
export class AllInventoryComponent implements OnInit {
  //public listBarang!: [];
  listBarang: any[] = [];

  barang: any;
  searchText!: string;
  fileName='Inventory.xlsx';

  constructor(
    private api : BarangApiService
    // private userStore: UserStoreService,
    // private auth : AuthapiService,
    ) {
    }

    ngOnInit() {
    this.api.getAllInventory()
    .subscribe(res => {
      this.listBarang = res;
    });
    }

  exportedexcel(): void{
    const element = document.getElementById('product');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element)
  
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet');
    XLSX.writeFile(wb, this.fileName);
  }
  
  key ='id_barang';
  reverse=false;
  sort(key:string){
    this.key=key;
    this.reverse=!this.reverse;
  }
}

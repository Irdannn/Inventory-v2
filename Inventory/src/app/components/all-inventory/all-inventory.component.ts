import { Component, OnInit } from '@angular/core';
import { AuthapiService } from 'src/app/services/authapi.service';
import { ServiceBarangApi } from 'src/app/services/barangApi.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import *as XLSX from 'xlsx';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-all-inventory',
  templateUrl: './all-inventory.component.html',
  styleUrls: ['./all-inventory.component.css']
})
export class AllInventoryComponent implements OnInit {
  public listBarang = [];
  public role!:string;

  searchText!: string;
  fileName='Inventory.xlsx';

  constructor(
    private api : ServiceBarangApi, 
    private userStore: UserStoreService,
    private auth : AuthapiService,
    private decimalPipe: DecimalPipe
    ) { }

  ngOnInit(): void {
    this.api.getAllInventory()
    .subscribe(res => {
      this.listBarang = res;
    });
    this.userStore.getFullNameFromStore()
    .subscribe(val=> {
      const rolefromToken = this.auth.getRoleFromToken();
      this.role = val || rolefromToken
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
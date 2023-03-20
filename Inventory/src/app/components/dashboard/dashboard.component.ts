import { Component, OnInit } from '@angular/core';
import { ServiceBarangApi } from 'src/app/services/barangApi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  
  public listBarang = [];
  searchText!: string;
  
  constructor(
    private api : ServiceBarangApi
    ) { }

  ngOnInit(): void {
    this.api.getAllInventory()
    .subscribe(res => {
      this.listBarang = res;
    });
  }
}

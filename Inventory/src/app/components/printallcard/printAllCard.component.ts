import { Component, OnInit } from '@angular/core';
import { ServiceBarangApi } from 'src/app/services/barangApi.service';

@Component({
  selector: 'app-printallcard',
  templateUrl: './printAllCard.component.html',
  styleUrls: ['./printAllCard.component.css']
})
export class printAllCardComponent implements OnInit {
  searchText!: string;
  public listBarang= [];
  
  constructor(
    private api : ServiceBarangApi,   
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
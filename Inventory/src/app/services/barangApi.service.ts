import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Barang } from '../models/barang';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceBarangApi {

  private baseurl = "https://inventory.insanmuliamalang.sch.id/inventoryapi/";
  constructor(private http : HttpClient) { 
    
  }

  getAllInventory(){
    return this.http.get<any>(`${this.baseurl}readall.php`);
  }

  addProduct(inventoryObj:any){
    return this.http.post<any>(`${this.baseurl}create.php`, inventoryObj)
  }

  getInventory(id_barang: string): Observable<Barang> {
    return this.http.get<Barang>(`${this.baseurl}read.php?id_barang=`+ id_barang);
  }

  getInventorybycategory(category: string): Observable<Barang> {
    return this.http.get<Barang>(`${this.baseurl}`+ category);
  }

  // updateBarang(id_barang: number, updateInventoryRequest: Barang): Observable<Barang>{
  //   return this.http.put<Barang>(`${this.baseurl}update.php?id_barang=`+ id_barang, updateInventoryRequest);
  // }

  updateBarang(id_barang: number, barang: Barang): Observable<Barang>{
    return this.http.put<Barang>(`${this.baseurl}update.php?id_barang=`+ id_barang, barang);
  }

  // updateBarang(barang: Barang): Observable<Barang> {
  //   return this.http.put<Barang>(`${this.baseurl}update.php?id_barang=`+ barang.id_barang, barang);
  // }
  
  deleteBarang(id_barang: number): Observable<Barang> {
    return this.http.delete<Barang>(`${this.baseurl}delete.php?id_barang=`+ id_barang);
  }

}
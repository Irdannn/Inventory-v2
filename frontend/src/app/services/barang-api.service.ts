import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Barang } from '../models/barang';
import { Observable } from 'rxjs';
import { Picture } from '../models/picture';

@Injectable({
  providedIn: 'root'
})
export class BarangApiService {

  private baseurl = "https://backend.insanmuliamalang.sch.id/api/inventory/";
  private picturl = "https://backend.insanmuliamalang.sch.id/api/picture/";

  constructor(private http : HttpClient) { 
    
  }

  getAllInventory(){
    return this.http.get<any>(`${this.baseurl}index`);
  }

  addProduct(formData:any){
    return this.http.post<any>(`${this.baseurl}store`, formData)
  }

  fileUpload(formData:any){
    return this.http.post<any>(`${this.picturl}store`, formData)
  }

  getInventory(id_barang: string): Observable<Barang> {
    return this.http.get<Barang>(`${this.baseurl}show/`+ id_barang);
  }

  getPictInventory(id_barang: any): Observable<Barang> {
    return this.http.get<Barang>(`${this.baseurl}showpict/ ${id_barang}/picture`);
  }

  getInventorybytempat(tempat: string): Observable<Barang> {
    return this.http.get<Barang>(`${this.baseurl}tempat/`+ tempat);
  }

  // updateBarang(id_barang: number, updateInventoryRequest: Barang): Observable<Barang>{
  //   return this.http.put<Barang>(`${this.baseurl}update.php?id_barang=`+ id_barang, updateInventoryRequest);
  // }

  updateBarang(id: number, formData:any): Observable<Barang>{
    return this.http.put<Barang>(`${this.baseurl}update/`+ id, formData);
  }

  updateGambarBarang(id: number, formData:any): Observable<Barang>{
    return this.http.put<Barang>(`${this.baseurl}updatepict/`+ id, formData);
  }

  // updateBarang(barang: Barang): Observable<Barang> {
  //   return this.http.put<Barang>(`${this.baseurl}update.php?id_barang=`+ barang.id_barang, barang);
  // }
  
  deleteBarang(id_barang: number): Observable<Barang> {
    return this.http.delete<Barang>(`${this.baseurl}destroy/`+ id_barang);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlurBarang } from '../models/alurbarang';

@Injectable({
  providedIn: 'root'
})
export class AlurbarangService {

  private baseurl = "https://inventory.insanmuliamalang.sch.id/alurbarang/";
  constructor( private http : HttpClient) { }

  getAllalurbarang(){
    return this.http.get<any>(`${this.baseurl}readall.php`);
  }

  addAlurbarang(alurbarangObj:any){
    return this.http.post<any>(`${this.baseurl}create.php`, alurbarangObj)
  }

  getAlurbarang(alurID: string): Observable<AlurBarang> {
    return this.http.get<AlurBarang>(`${this.baseurl}read.php?alurID=`+ alurID);
  }

  updateAlurbarang(alurID: number, AlurBarang: AlurBarang): Observable<AlurBarang>{
    return this.http.put<AlurBarang>(`${this.baseurl}update.php?alurID=`+ alurID, AlurBarang);
  }
  
  deleteAlurbarang(alurID: number): Observable<AlurBarang> {
    return this.http.delete<AlurBarang>(`${this.baseurl}delete.php?alurID=`+ alurID);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Laporan } from '../models/laporan';

@Injectable({
  providedIn: 'root'
})
export class LaporanService {

  private baseurl = "https://backend.insanmuliamalang.sch.id/api/laporan/"; 
  constructor( private http : HttpClient) { }

  getAllLaporan(){
    return this.http.get<any>(`${this.baseurl}index`);
  }

  addLaporan(laporanObj:any){
    return this.http.post<any>(`${this.baseurl}store`, laporanObj)
  }

  getLaporan(id: number): Observable<Laporan> {
    return this.http.get<Laporan>(`${this.baseurl}show/`+ id);
  }

  updateLaporan(id: number, laporan: Laporan): Observable<Laporan>{
    return this.http.put<Laporan>(`${this.baseurl}update/`+ id, Laporan);
  }
  
  deleteLaporan(id: number): Observable<Laporan> {
    return this.http.delete<Laporan>(`${this.baseurl}destroy`+ id);
  }
}

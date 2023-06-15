import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlurBarang } from '../models/alurbarang';

@Injectable({
  providedIn: 'root'
})
export class AlurbarangService {

  private baseurl = "https://backend.insanmuliamalang.sch.id/api/alur/"; 
  constructor( private http : HttpClient) { }

  getAllalurbarang(){
    return this.http.get<any>(`${this.baseurl}index`);
  }

  addAlurbarang(alurbarangObj:any){
    return this.http.post<any>(`${this.baseurl}store`, alurbarangObj)
  }

  getAlurbarang(id: number): Observable<AlurBarang> {
    return this.http.get<AlurBarang>(`${this.baseurl}show/`+ id);
  }

  updateAlurbarang(id: number, AlurBarang: AlurBarang): Observable<AlurBarang>{
    return this.http.put<AlurBarang>(`${this.baseurl}update/`+ id, AlurBarang);
  }
  
  deleteAlurbarang(id: number): Observable<AlurBarang> {
    return this.http.delete<AlurBarang>(`${this.baseurl}destroy`+ id);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sop } from '../models/sop';

@Injectable({
  providedIn: 'root'
})
export class SopService {

  private baseurl = "http://127.0.0.1:8000/api/sop/"; 
  constructor( private http : HttpClient) { }

  getAllSop(){
    return this.http.get<any>(`${this.baseurl}index`);
  }

  addSop(sopObj:any){
    return this.http.post<any>(`${this.baseurl}store`, sopObj)
  }

  getSop(id: number): Observable<Sop> {
    return this.http.get<Sop>(`${this.baseurl}show/`+ id);
  }

  updateSop(id: number, sop: Sop): Observable<Sop>{
    return this.http.put<Sop>(`${this.baseurl}update/`+ id, sop);
  }
  
  deleteSop(id: number): Observable<Sop> {
    return this.http.delete<Sop>(`${this.baseurl}destroy`+ id);
  }
}

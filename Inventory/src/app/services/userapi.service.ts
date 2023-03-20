import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  private baseUrl = 'https://localhost:7048/api/User';
  constructor( private http: HttpClient) {}

  getUsers() {
    return this.http.get<any>(this.baseUrl);
  }
}
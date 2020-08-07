import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanalertService {

  private baseUrl = 'http://localhost:8080/loanalert/';

  constructor(private http: HttpClient) { }

  getLoanalert(rowno: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${rowno}`);
  }

  addLoanalert(loanalert: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, loanalert);
  }

  editLoanalert(rowno: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${rowno}`, value);
  }

  deleteLoanalert(rowno: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${rowno}`, { responseType: 'text' });
  }
}


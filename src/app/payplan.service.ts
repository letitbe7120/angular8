import { Payplan } from './payplan';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PayplanService {

  private baseUrl = 'http://localhost:8080/payplan/';

  constructor(private http: HttpClient) { }

  getPayplan(rowno: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${rowno}`);
  }

  addPayplan(notes: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, Payplan);
  }

  editPayplan(rowno: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${rowno}`, value);
  }

  deletePayplan(rowno: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${rowno}`, { responseType: 'text' });
  }
}


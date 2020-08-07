import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoanvendorService {
  private baseUrl = 'http://localhost:8080/loanvendor/';

  constructor(private http: HttpClient) { }

  getLoanvendor(rowno: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${rowno}`);
  }

  addLoanvendor(loanvendor: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, loanvendor);
  }

  editLoanvendor(rowno: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${rowno}`, value);
  }

  deleteLoanvendor(rowno: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${rowno}`, { responseType: 'text' });
  }
}


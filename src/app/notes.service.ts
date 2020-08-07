import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private baseUrl = 'http://localhost:8080/notes/';

  constructor(private http: HttpClient) { }

  getNotes(rowno: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${rowno}`);
  }

  addNotes(notes: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, notes);
  }

  editNotes(rowno: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${rowno}`, value);
  }

  deleteNotes(rowno: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${rowno}`, { responseType: 'text' });
  }
}


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EditnotesService {
  editid: string;
  constructor() {}
  seteditid(id: string) {
    this.editid = id;
  }
  geteditid(){
    return this.editid
  }
}

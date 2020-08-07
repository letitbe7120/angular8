import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EditloanService {
  editid: string;
  alertloanid: string;
  constructor() {}
  setditid(id: string) {
    this.editid = id;
  }
  geteditid() {
    return this.editid;
  }
  seteditloanaletid(id: string) {
    this.alertloanid = id;
  }
  geteditloanaletid(){
    return this.alertloanid
    console.log(this.alertloanid);

  }
}

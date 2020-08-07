import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditloanService {
  editid:string
  constructor() { }
  setditid(id:string){
    this.editid=id
  }
  geteditid(){
    return this.editid
  }
}

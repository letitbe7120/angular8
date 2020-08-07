import { Observable } from 'rxjs';
import { LoanalertService } from './../loanalert.service';
import { Component, OnInit } from '@angular/core';
import{Router}from '@angular/router';
import { Loanalert } from '../loanalert';

@Component({
  selector: 'app-loanalert',
  templateUrl: './loanalert.component.html',
  styleUrls: ['./loanalert.component.css']
})
export class LoanalertComponent implements OnInit {

  loanalerts:Observable<Loanalert[]>;
  constructor(private loanalertService:LoanalertService ,private router:Router) { }

  ngOnInit() :void{
   
  }
 
  deleteLoanalert(rowno: number) {
    this.loanalertService.deleteLoanalert(rowno)
      .subscribe(
        data => {
          console.log(data);
         
         
        },
        error => console.log(error));
  }


  editLoanalert(rowno: number){
    this.router.navigate(['alertedit', rowno]);
  }
  onSubmit()
  {
    this.router.navigate(['/alertform'])
  }
  onBack()
  {
      this.router.navigate(['loanvendor']);
  }
    onNext()
  {
    this.router.navigate(['payplan']);
  
  }

}

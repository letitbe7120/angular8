import { Observable } from 'rxjs';
import { LoanvendorService } from './../loanvendor.service';
import { Component, OnInit } from '@angular/core';
import{Router}from '@angular/router';
import { Loanvendor } from '../loanvendor';

@Component({
  selector: 'app-loanvendor',
  templateUrl: './loanvendor.component.html',
  styleUrls: ['./loanvendor.component.css']
})
export class LoanvendorComponent implements OnInit {

  loanvendors:Observable<Loanvendor[]>;
  constructor(private loanvendorService:LoanvendorService ,private router:Router) { }

  ngOnInit() :void{
   
  }

 

 
  deleteLoanvendor(rowno: number) {
    this.loanvendorService.deleteLoanvendor(rowno)
      .subscribe(
        data => {
          console.log(data);
         
         
        },
        error => console.log(error));
  }


  editLoanvendor(rowno: number){
    this.router.navigate(['loanedit', rowno]);
  }
  onSubmit()
  {
    this.router.navigate(['/loanform'])
  }
  onBack()
  {
      this.router.navigate(['notes']);
  }
    onNext()
  {
    this.router.navigate(['loanalert']);
  
  }

}

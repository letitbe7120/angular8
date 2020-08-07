import { Observable } from 'rxjs';
import { PayplanService } from './../payplan.service';
import { Payplan } from './../payplan';
import { Component, OnInit } from '@angular/core';
import{Router}from '@angular/router';

@Component({
  selector: 'app-payplan',
  templateUrl: './payplan.component.html',
  styleUrls: ['./payplan.component.css']
})
export class PayplanComponent implements OnInit {
  payplans:Observable<Payplan[]>;
  constructor(private payplanService:PayplanService ,private router:Router) { }

  ngOnInit() :void{
   
  }
  deletePayplan(rowno: number) {
    this.payplanService.deletePayplan(rowno)
      .subscribe(
        data => {
          console.log(data);
         
         
        },
        error => console.log(error));
  }


  editPayplan(rowno: number){
    this.router.navigate(['payedit', rowno]);
  }
  onSubmit()
  {
    this.router.navigate(['/payform'])
  }
  onBack()
  {
      this.router.navigate(['loanalert']);
  }
    onNext()
  {
    this.router.navigate(['../']);
  
  }

}

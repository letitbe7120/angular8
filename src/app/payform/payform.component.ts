import { PayplanService } from './../payplan.service';
import { Payplan } from './../payplan';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payform',
  templateUrl: './payform.component.html',
  styleUrls: ['./payform.component.css']
})
export class PayformComponent implements OnInit {

  payplan:Payplan= new Payplan();
  submitted=false;
  constructor(private payplanService:PayplanService, private router:Router ) { }

  ngOnInit(): void {
  }
  
  newPayplan(): void {
    this.submitted = false;
    this.payplan = new Payplan();
  }

  save() {
    this.payplanService.addPayplan(this.payplan)
      .subscribe(data => console.log(data), error => console.log(error));
    this.payplan = new Payplan();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/payplan']);
  }

  onCancel()
  {
    this.router.navigate(['/payplan']);
  }
}

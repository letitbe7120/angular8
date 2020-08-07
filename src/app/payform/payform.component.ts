import { PayplanService } from './../payplan.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { PayformInterface } from "./payformInterface";
import { Payplan } from '../payplan';
@Component({
  selector: 'app-payform',
  templateUrl: './payform.component.html',
  styleUrls: ['./payform.component.css'],
})
export class PayformComponent implements OnInit {
  payplan: Payplan = new Payplan();
  submitted = false;
  data:PayformInterface;
  constructor(
    private payplanService: PayplanService,
    private router: Router,
    private db: AngularFirestore
  ) {}

  ngOnInit(): void {}

  newPayplan(): void {
    this.submitted = false;
    this.payplan = new Payplan();
  }

  save() {
    this.payplanService.addPayplan(this.payplan).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    this.payplan = new Payplan();
    this.gotoList();
  }

  onSubmit(f: NgForm) {
    const data = {
      paytype: f.value.paytype,
      ratetype: f.value.ratetype,
      creditline: f.value.creditline,
      netavailable: f.value.netavailable,
      credlineadj: f.value.credlineadj,
      ratemargin: f.value.ratemargin,
      monthlypayment: f.value.monthlypayment,
      disbusrsment: f.value.disbusrsment,
      paytenure:"a",
      payterm: f.value.payterm,
      disbursmentterm: f.value.disbursmentterm,
      periodic: f.value.periodic,
      basispoints: f.value.basispoints,
      grosspayment: f.value.grosspayment,
      round: f.value.round,
      lifetime: f.value.lifetime,
      semipayment: f.value.semipayment,
      lineofcredit: f.value.lineofcredit,
      actiondate: f.value.actiondate,
      modified: f.value.modified,
      creditside: f.value.creditside,
      service: f.value.service,
      intrestrate: f.value.intrestrate,
      changeplan: f.value.changeplan,
    };
    console.log(data);

    this.db
      .collection('PayPlanform')
      .add(data)
      .then((re) => {
        console.log('Success');
      })
      .catch((re) => {
        console.log('Fail', re.message);
      });
    this.submitted = true;
    console.log(f.value.paytype);
    console.log('Success');
    this.save();
  }

  gotoList() {
    this.router.navigate(['/payplan']);
  }

  onCancel() {
    this.router.navigate(['/payplan']);
  }
}

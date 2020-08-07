import { Observable } from 'rxjs';
import { PayplanService } from './../payplan.service';
import { Payplan } from './../payplan';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PayformInterface } from '../payform/payformInterface';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-payplan',
  templateUrl: './payplan.component.html',
  styleUrls: ['./payplan.component.css'],
})
export class PayplanComponent implements OnInit {
 Payplans: Observable<any>;
  payplan1: any[];
  constructor(
    private payplanService: PayplanService,
    private router: Router,
    private db: AngularFirestore,
    private service:PayplanService
  ) {}

  ngOnInit(): void {
    this.Payplans = this.db
      .collection('PayPlanform')
      .snapshotChanges()
      .pipe(
        map((re) => {
          return re.map((re) => {
            const data = re.payload.doc.data() as PayformInterface;
            const id = re.payload.doc.id;
            return { id, ...data };
          });
        })
      );
      this.Payplans.subscribe(re=>{
        this.payplan1=re;
        console.log(re);

      })
  }
  deletePayplan(rowno: string) {
    this.db.doc(`PayPlanform/${rowno}`).delete().then(re=>{
      console.log("success");
    })
  }

  editPayplan(id: string) {
    this.service.setEditId(id);
    this.router.navigate(['payedit']);
  }
  onSubmit() {
    this.router.navigate(['/payform']);
  }
  onBack() {
    this.router.navigate(['loanalert']);
  }
  onNext() {
    this.router.navigate(['../']);
  }
}

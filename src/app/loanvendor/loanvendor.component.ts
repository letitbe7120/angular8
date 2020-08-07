import { EditloanService } from './../loanedit/editloan/editloan.service';
import {map} from"rxjs/operators"
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { LoanvendorService } from './../loanvendor.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loanvendor',
  templateUrl: './loanvendor.component.html',
  styleUrls: ['./loanvendor.component.css'],
})
export class LoanvendorComponent implements OnInit {
  getloanvendors: Observable<any[]>;
  loanvendors:any;
  constructor(
    private loanvendorService: LoanvendorService,
    private router: Router,
    private db: AngularFirestore,
    private edit:EditloanService
  ) {}

  ngOnInit(): void {
    this.getloanvendors = this.db
      .collection('LoanVendor')
      .snapshotChanges()
      .pipe(
        map((re) => {
          return re.map((re) => {
            const data = re.payload.doc.data() as any;
            const id = re.payload.doc.id;
            return { id, ...data };
          });
        })
      );
    this.getloanvendors.subscribe((re) => {
      this.loanvendors=re
      console.log(re);
    });
  }

  deleteLoanvendor(id: string) {
  this.db.doc(`LoanVendor/${id}`).delete().then(re=>{
    console.log("Success");

  }).catch(re=>{
    console.log("Delete Failed");

  });
  }

  editLoanvendor(id: string) {
    console.log(id);

    this.edit.setditid(id);
    this.router.navigate(['loanedit']);
  }
  onSubmit() {
    this.router.navigate(['/loanform']);
  }
  onBack() {
    this.router.navigate(['notes']);
  }
  onNext() {
    this.router.navigate(['loanalert']);
  }
}

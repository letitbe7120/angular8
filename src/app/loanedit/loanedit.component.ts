import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { EditloanService } from './editloan/editloan.service';
import { LoanvendorService } from './../loanvendor.service';
import { Component, OnInit } from '@angular/core';
import { Loanvendor } from './../loanvendor';
import { ActivatedRoute, RouteReuseStrategy, Router } from '@angular/router';
@Component({
  selector: 'app-loanedit',
  templateUrl: './loanedit.component.html',
  styleUrls: ['./loanedit.component.css'],
})
export class LoaneditComponent implements OnInit {
  rowno: number;
  editloanid:string;
  loanvendor: Loanvendor;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private editload: EditloanService,
    private loanvendorService: LoanvendorService,
    private db:AngularFirestore
  ) {}

  ngOnInit() {
    this.editloanid=this.editload.geteditid();
    console.log(this.editloanid);

  }
  editLoanvendor() {
    this.loanvendorService
      .editLoanvendor(this.rowno, this.loanvendor)
      .subscribe(
        (data) => console.log(data),
        (error) => console.log(error)
      );
    this.loanvendor = new Loanvendor();
    this.gotoList();
  }

  onSubmit(f:NgForm) {
    const data={
      loanCompany:f.value.vendorcompany
    };
    this.db.doc(`LoanVendor/${this.editloanid}`).update(data).then(re=>{
      console.log("Success");

    }).catch(re=>{
      console.log("Failed");

    });
    this.editLoanvendor();
  }

  gotoList() {
    this.router.navigate(['/loanvendor']);
  }
  onCancel() {
    this.router.navigate(['loamvendor']);
  }
}

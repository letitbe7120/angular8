import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoanvendorService } from './../loanvendor.service';
import { Router } from '@angular/router';
import { Loanvendor } from './../loanvendor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loanform',
  templateUrl: './loanform.component.html',
  styleUrls: ['./loanform.component.css'],
})
export class LoanformComponent implements OnInit {
  loanvendor: Loanvendor = new Loanvendor();
  submitted = false;
  constructor(
    private LoanvendorService: LoanvendorService,
    private router: Router,
    private db: AngularFirestore
  ) {}

  ngOnInit(): void {}

  newNotes(): void {
    this.submitted = false;
    this.loanvendor = new Loanvendor();
  }

  save() {
    this.LoanvendorService.addLoanvendor(this.loanvendor).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    this.loanvendor = new Loanvendor();
    this.gotoList();
  }

  onSubmit(f:NgForm) {
    const data = {
      loanCompany: f.value.vendorcompany,
    };
    this.db.collection("LoanVendor").add(data).then(re=>{
      console.log("Success");

    }).catch(re=>{
      console.log("Failed");

    })
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/loanvendor']);
  }

  onCancel() {
    this.router.navigate(['/loanvendor']);
  }
}

import { AngularFirestore } from '@angular/fire/firestore';
import { EditloanService } from './../loanedit/editloan/editloan.service';
import { NgForm } from '@angular/forms';
import { LoanalertService } from './../loanalert.service';
import { Component, OnInit } from '@angular/core';
import { Loanalert } from '../loanalert';
import { ActivatedRoute, RouteReuseStrategy, Router } from '@angular/router';

@Component({
  selector: 'app-alertedit',
  templateUrl: './alertedit.component.html',
  styleUrls: ['./alertedit.component.css'],
})
export class AlerteditComponent implements OnInit {
  rowno: number;
  loanalert: Loanalert;
  editid: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loanalertService: LoanalertService,
    private editloanalert: EditloanService,
    private db:AngularFirestore
  ) {}

  ngOnInit() {
    this.editid = this.editloanalert.geteditloanaletid();
  }
  editLoanalert() {
    this.loanalertService.editLoanalert(this.rowno, this.loanalert).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    this.loanalert = new Loanalert();
    this.gotoList();
  }

  onSubmit(f: NgForm) {
    const data = {
      alerttype: f.value.alerttype,
      alertdate: f.value.alertdate,
      alertexpdate: f.value.alertexpdate,
      custindicator: f.value.custindicator,
      alertamt: f.value.alertamt,
      alertnote: f.value.alertnote,
      alertdescription: f.value.alertdescription,

      uploadstatus: f.value.uploadstatus,
      alertseverity: f.value.alertseverity,
      alertstatus: f.value.alertstatus,
    };
    this.db.doc(`LoanAlert/${this.editid}`).update(data).then(re=>{
      console.log("Edited");

    }).catch(re=>{
      console.log("Failed");

    });
    this.editLoanalert();
  }

  gotoList() {
    this.router.navigate(['/loanalert']);
  }
  onCancel() {
    this.router.navigate(['loanalert']);
  }
}

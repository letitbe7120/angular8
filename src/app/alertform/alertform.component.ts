import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoanalertService } from './../loanalert.service';
import { Loanalert } from './../loanalert';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alertform',
  templateUrl: './alertform.component.html',
  styleUrls: ['./alertform.component.css'],
})
export class AlertformComponent implements OnInit {
  loanalert: Loanalert = new Loanalert();
  submitted = false;
  constructor(
    private loanalertService: LoanalertService,
    private router: Router,
    private db: AngularFirestore
  ) {}

  ngOnInit(): void {}

  newNotes(): void {
    this.submitted = false;
    this.loanalert = new Loanalert();
  }

  save() {
    this.loanalertService.addLoanalert(this.loanalert).subscribe(
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
    this.db
      .collection('LoanAlert')
      .add(data)
      .then((re) => {
        console.log('Success');
      })
      .catch((re) => {
        console.log('Failed');
      });
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/loanalert']);
  }

  onCancel() {
    this.router.navigate(['/loanalert']);
  }
}

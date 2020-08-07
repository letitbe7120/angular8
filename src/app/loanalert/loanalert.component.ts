import { EditloanService } from './../loanedit/editloan/editloan.service';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { LoanalertService } from './../loanalert.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loanalert } from '../loanalert';

@Component({
  selector: 'app-loanalert',
  templateUrl: './loanalert.component.html',
  styleUrls: ['./loanalert.component.css'],
})
export class LoanalertComponent implements OnInit {
  loanalertsdb: Observable<Loanalert[]>;
  loanalerts: any[];
  constructor(
    private loanalertService: LoanalertService,
    private router: Router,
    private db: AngularFirestore,
    private editloan:EditloanService
  ) {}

  ngOnInit(): void {
    this.loanalertsdb = this.db
      .collection('LoanAlert')
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
    this.loanalertsdb.subscribe((re) => {
      console.log(re);
      this.loanalerts = re;
    });
  }

  deleteLoanalert(id: number) {
    this.db
      .doc(`LoanAlert/${id}`)
      .delete()
      .then((re) => {
        console.log('Dekleted');
      })
      .catch((re) => {
        console.log('Not Deleted');
      });
  }

  editLoanalert(id: string) {
    this.editloan.seteditloanaletid(id)
    this.router.navigate(['alertedit']);
  }
  onSubmit() {
    this.router.navigate(['/alertform']);
  }
  onBack() {
    this.router.navigate(['loanvendor']);
  }
  onNext() {
    this.router.navigate(['payplan']);
  }
}

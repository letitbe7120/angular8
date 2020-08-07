import { notesInterface } from './../notesform/noteinterface';
import { AngularFirestore } from '@angular/fire/firestore';
import { NotesService } from './../notes.service';
import { Notes } from './../notes';
import { Observable, pipe } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',

  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  notes: any;
  Notes: Observable<any[]>;
  constructor(
    private notesService: NotesService,
    private router: Router,
    private db: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.Notes = this.db
      .collection('Notes')
      .snapshotChanges()
      .pipe(
        map((re) => {
          return re.map((re) => {
            const data = re.payload.doc.data() as notesInterface;
            const id = re.payload.doc.id;
            return { id, ...data };
          });
        })
      );
      this.Notes.subscribe(re=>{
        this.notes=re;
        console.log(re);

      })
  }

  deleteNotes(rowno: string) {
    // this.notesService.deleteNotes(rowno).subscribe(
    //   (data) => {
    //     console.log(data);
    //   },
    //   (error) => console.log(error)
    // );
  this.db.doc(`Notes/${rowno}`).delete().then(re=>{
    console.log("Success");

  }).catch(re=>{
    console.log(re.message);

  });
  }

  editNotes(rowno: string) {
    this.router.navigate(['notesedit', rowno]);
  }
  onSubmit() {
    this.router.navigate(['/notesform']);
  }
  onBack() {
    this.router.navigate(['../']);
  }
  onNext() {
    this.router.navigate(['loanvendor']);
  }
}

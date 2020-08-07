import { notesInterface } from './noteinterface';
import { NotesService } from './../notes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notes } from '../notes';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-notesform',
  templateUrl: './notesform.component.html',
  styleUrls: ['./notesform.component.css'],
})
export class NotesformComponent implements OnInit {
  notes: Notes = new Notes();
  submitted = false;
  Notes: notesInterface;
  constructor(
    private notesService: NotesService,
    private router: Router,
    private db: AngularFirestore
  ) {}

  ngOnInit(): void {}

  newNotes(): void {
    this.submitted = false;
    this.notes = new Notes();
  }

  save() {
    this.notesService.addNotes(this.notes).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    this.notes = new Notes();
    this.gotoList();
  }

  onSubmit(f: NgForm) {
    this.Notes = {
      notetext: f.value.notetext,
      notetype: f.value.notetype,
      noteoperation: f.value.noteoperation,
      noteimportance: f.value.noteimportance,
    };

    this.db
      .collection('Notes')
      .add(this.Notes)
      .then((re) => {
        console.log('Success');
      })
      .catch((re) => {
        console.log('Fail', re.message);
      });
    this.submitted = true;
    console.log(f.value.notetype);

    console.log('Success');

    this.save();
  }

  gotoList() {
    this.router.navigate(['/notes']);
  }

  onCancel() {
    this.router.navigate(['/notes']);
  }
}

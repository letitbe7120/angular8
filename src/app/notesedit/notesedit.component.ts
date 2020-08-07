import { NgForm } from '@angular/forms';
import { notesInterface } from './../notesform/noteinterface';
import { AngularFirestore } from '@angular/fire/firestore';
import { EditnotesService } from './editnotes/editnotes.service';
import { NotesService } from './../notes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteReuseStrategy, Router } from '@angular/router';
import{Notes} from '../notes' ;
@Component({
  selector: 'app-notesedit',
  templateUrl: './notesedit.component.html',
  styleUrls: ['./notesedit.component.css']
})
export class NoteseditComponent implements OnInit {
    rowno: number;
    editid:string
    notes:Notes;
    editbyid:notesInterface
  constructor(private route:ActivatedRoute,private router:Router,private edit:EditnotesService,
    private notesService:NotesService ,private db:AngularFirestore) { }

  ngOnInit()  {
    this.editid=this.edit.geteditid();
    console.log(this.editid);


  }
  editNotes() {
    this.notesService.editNotes(this.rowno, this.notes)
      .subscribe(data => console.log(data), error => console.log(error));
    this.notes = new Notes();
    this.gotoList();
  }

  onSubmit(f:NgForm) {
    this.editbyid = {
      notetext: f.value.notetext,
      notetype: f.value.notetype,
      noteoperation: f.value.noteoperation,
      noteimportance: f.value.noteimportance,
    };
    this.db.doc(`Notes/${this.editid}`).update(this.editbyid).then(re=>{
      console.log("Updated");

    }).catch(re=>{
      console.log("Failed");

    })
    this.editNotes();
  }

  gotoList() {
    this.router.navigate(['/notes']);
  }
  onCancel()
  {
    this.router.navigate(['notes']);
  }

}

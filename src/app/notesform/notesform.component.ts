import { NotesService } from './../notes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{Notes} from'../notes';
@Component({
  selector: 'app-notesform',
  templateUrl: './notesform.component.html',
  styleUrls: ['./notesform.component.css']
})
export class NotesformComponent implements OnInit {

  notes: Notes = new Notes();
  submitted=false;
  constructor(private notesService:NotesService, private router:Router ) { }

  ngOnInit(): void {
  }
  
  newNotes(): void {
    this.submitted = false;
    this.notes = new Notes();
  }

  save() {
    this.notesService.addNotes(this.notes)
      .subscribe(data => console.log(data), error => console.log(error));
    this.notes = new Notes();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/notes']);
  }

  onCancel()
  {
    this.router.navigate(['/notes']);
  }
}

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
    notes:Notes;
  constructor(private route:ActivatedRoute,private router:Router,
    private notesService:NotesService) { }

  ngOnInit()  {
    this.notes = new Notes();

    this.rowno = this.route.snapshot.params['rowno'];
    
    this.notesService.getNotes(this.rowno)
      .subscribe(data => {
        console.log(data)
        this.notes = data;
      }, error => console.log(error));
  }
  editNotes() {
    this.notesService.editNotes(this.rowno, this.notes)
      .subscribe(data => console.log(data), error => console.log(error));
    this.notes = new Notes();
    this.gotoList();
  }

  onSubmit() {
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

import { NotesService } from './../notes.service';
import { Notes } from './../notes';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import{Router}from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
    
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notess:Observable<Notes[]>;
  constructor(private notesService:NotesService ,private router:Router) { }

  ngOnInit() :void{
   
  }

 

 
  deleteNotes(rowno: number) {
    this.notesService.deleteNotes(rowno)
      .subscribe(
        data => {
          console.log(data);
         
         
        },
        error => console.log(error));
  }


  editNotes(rowno: number){
    this.router.navigate(['notesedit', rowno]);
  }
  onSubmit()
  {
    this.router.navigate(['/notesform'])
  }
  onBack()
  {
      this.router.navigate(['../']);
  }
    onNext()
  {
    this.router.navigate(['loanvendor']);
  
  }
}

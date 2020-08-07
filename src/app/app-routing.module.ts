import { AlerteditComponent } from './alertedit/alertedit.component';
import { NoteseditComponent } from './notesedit/notesedit.component';
import { AlertformComponent } from './alertform/alertform.component';
import { NotesformComponent } from './notesform/notesform.component';
import { LoanformComponent } from './loanform/loanform.component';
import { PayplanComponent } from './payplan/payplan.component';
import { NotesComponent } from './notes/notes.component';
import { LoanvendorComponent } from './loanvendor/loanvendor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanalertComponent } from './loanalert/loanalert.component';
import { PayformComponent } from './payform/payform.component';
import { LoaneditComponent } from './loanedit/loanedit.component';
import { PayeditComponent } from './payedit/payedit.component';


const routes: Routes = [
  {path:'notes',component:NotesComponent},
  {path:'loanvendor',component:LoanvendorComponent},
  {path:'loanalert',component:LoanalertComponent},
  {path:'payplan',component:PayplanComponent},
  {path:'notesform',component:NotesformComponent},
  {path:'loanform',component:LoanformComponent},
  {path:'alertform',component:AlertformComponent},
  {path:'payform',component:PayformComponent},
  {path:'notesedit',component:NoteseditComponent},
  {path:'loanedit',component:LoaneditComponent},
  {path:'alertedit',component:AlerteditComponent},
  {path:'payedit',component:PayeditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[LoanvendorComponent,LoanalertComponent,NotesComponent,PayplanComponent,NotesformComponent,LoanformComponent,
AlertformComponent,PayformComponent]

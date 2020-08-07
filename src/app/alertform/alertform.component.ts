import { Router } from '@angular/router';
import { LoanalertService } from './../loanalert.service';
import { Loanalert } from './../loanalert';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alertform',
  templateUrl: './alertform.component.html',
  styleUrls: ['./alertform.component.css']
})
export class AlertformComponent implements OnInit {
  loanalert: Loanalert = new Loanalert();
  submitted=false;
  constructor(private loanalertService:LoanalertService, private router:Router ) { }

  ngOnInit(): void {
  }
  
  newNotes(): void {
    this.submitted = false;
    this.loanalert = new Loanalert();
  }

  save() {
    this.loanalertService.addLoanalert(this.loanalert)
      .subscribe(data => console.log(data), error => console.log(error));
    this.loanalert = new Loanalert();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/loanalert']);
  }

  onCancel()
  {
    this.router.navigate(['/loanalert']);
  }
}

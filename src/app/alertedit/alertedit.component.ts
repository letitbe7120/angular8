import { LoanalertService } from './../loanalert.service';
import { Component, OnInit } from '@angular/core';
import{Loanalert} from '../loanalert';
import { ActivatedRoute, RouteReuseStrategy, Router } from '@angular/router';

@Component({
  selector: 'app-alertedit',
  templateUrl: './alertedit.component.html',
  styleUrls: ['./alertedit.component.css']
})
export class AlerteditComponent implements OnInit {
  rowno: number;
  loanalert:Loanalert;
constructor(private route:ActivatedRoute,private router:Router,
  private loanalertService:LoanalertService) { }

ngOnInit()  {
  this.loanalert = new Loanalert();

  this.rowno = this.route.snapshot.params['rowno'];
  
  this.loanalertService.getLoanalert(this.rowno)
    .subscribe(data => {
      console.log(data)
      this.loanalert = data;
    }, error => console.log(error));
}
editLoanalert() {
  this.loanalertService.editLoanalert(this.rowno, this.loanalert)
    .subscribe(data => console.log(data), error => console.log(error));
  this.loanalert = new Loanalert();
  this.gotoList();
}

onSubmit() {
  this.editLoanalert();    
}

gotoList() {
  this.router.navigate(['/loanalert']);
}
onCancel()
{
  this.router.navigate(['loanalert']);
}

}

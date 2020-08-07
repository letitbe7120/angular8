import { PayplanService } from './../payplan.service';
import { Payplan } from './../payplan';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteReuseStrategy, Router } from '@angular/router';
@Component({
  selector: 'app-payedit',
  templateUrl: './payedit.component.html',
  styleUrls: ['./payedit.component.css']
})
export class PayeditComponent implements OnInit {
  rowno: number;
 payplan:Payplan;
constructor(private route:ActivatedRoute,private router:Router,
  private payplanService:PayplanService) { }

ngOnInit()  {
  this.payplan = new Payplan();

  this.rowno = this.route.snapshot.params['rowno'];
  
  this.payplanService.getPayplan(this.rowno)
    .subscribe(data => {
      console.log(data)
      this.payplan = data;
    }, error => console.log(error));
}
editPayplan() {
  this.payplanService.editPayplan(this.rowno, this.payplan)
    .subscribe(data => console.log(data), error => console.log(error));
  this.payplan = new Payplan();
  this.gotoList();
}

onSubmit() {
  this.editPayplan();    
}

gotoList() {
  this.router.navigate(['/payplan']);
}
onCancel()
{
  this.router.navigate(['payplan']);
}

}

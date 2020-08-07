import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { PayplanService } from './../payplan.service';
import { Payplan } from './../payplan';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteReuseStrategy, Router } from '@angular/router';
@Component({
  selector: 'app-payedit',
  templateUrl: './payedit.component.html',
  styleUrls: ['./payedit.component.css'],
})
export class PayeditComponent implements OnInit {
  rowno: number;
  payplan: Payplan;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private payplanService: PayplanService,
    private service: PayplanService,
    private db:AngularFirestore
  ) {}
  editId: string;
  ngOnInit() {
    this.editId = this.service.geteditId();
  }
  editPayplan() {
    this.payplanService.editPayplan(this.rowno, this.payplan).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    this.payplan = new Payplan();
    this.gotoList();
  }

  onSubmit(f: NgForm) {
     const data = {
       paytype: f.value.paytype,
       ratetype: f.value.ratetype,
       creditline: f.value.creditline,
       netavailable: f.value.netavailable,
       credlineadj: f.value.credlineadj,
       ratemargin: f.value.ratemargin,
       monthlypayment: f.value.monthlypayment,
       disbusrsment: f.value.disbusrsment,
       paytenure: 'a',
       payterm: f.value.payterm,
       disbursmentterm: f.value.disbursmentterm,
       periodic: f.value.periodic,
       basispoints: f.value.basispoints,
       grosspayment: f.value.grosspayment,
       round: f.value.round,
       lifetime: f.value.lifetime,
       semipayment: f.value.semipayment,
       lineofcredit: f.value.lineofcredit,
       actiondate: f.value.actiondate,
       modified: f.value.modified,
       creditside: f.value.creditside,
       service: f.value.service,
       intrestrate: f.value.intrestrate,
       changeplan: f.value.changeplan,
     };
    this.db.doc(`PayPlanform/${this.editId}`).update(data).then(re=>{
      console.log("Success");

    });
 this.editPayplan();
  }

  gotoList() {
    this.router.navigate(['/payplan']);
  }
  onCancel() {
    this.router.navigate(['payplan']);
  }
}

import { LoanvendorService } from './../loanvendor.service';
import { Component, OnInit } from '@angular/core';
import{Loanvendor} from './../loanvendor';
import { ActivatedRoute, RouteReuseStrategy, Router } from '@angular/router';
@Component({
  selector: 'app-loanedit',
  templateUrl: './loanedit.component.html',
  styleUrls: ['./loanedit.component.css']
})
export class LoaneditComponent implements OnInit {
  rowno: number;
    loanvendor:Loanvendor;
  constructor(private route:ActivatedRoute,private router:Router,
    private loanvendorService:LoanvendorService) { }

  ngOnInit()  {
    this.loanvendor = new Loanvendor();

    this.rowno = this.route.snapshot.params['rowno'];
    
    this.loanvendorService.getLoanvendor(this.rowno)
      .subscribe(data => {
        console.log(data)
        this.loanvendor = data;
      }, error => console.log(error));
  }
  editLoanvendor() {
    this.loanvendorService.editLoanvendor(this.rowno, this.loanvendor)
      .subscribe(data => console.log(data), error => console.log(error));
    this.loanvendor = new Loanvendor();
    this.gotoList();
  }

  onSubmit() {
    this.editLoanvendor();    
  }

  gotoList() {
    this.router.navigate(['/loanvendor']);
  }
  onCancel()
  {
    this.router.navigate(['loamvendor']);
  }

}

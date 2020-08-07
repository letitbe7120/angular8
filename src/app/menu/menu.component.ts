
import { Component, OnInit } from '@angular/core';
import{Router}from "@angular/router";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})




export class MenuComponent implements OnInit {

constructor(private router:Router,){}
onSubmit()
{
  this.router.navigate(['/notes'])
}
onVendor()
{
  this.router.navigate(['/loanvendor'])
}
onAlert()
{
  this.router.navigate(['/loanalert'])
}
onPay()
{
  this.router.navigate(['/payplan'])
}



  ngOnInit(): void {
  }

}

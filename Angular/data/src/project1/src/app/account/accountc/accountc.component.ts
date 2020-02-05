import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accountc',
  templateUrl: './accountc.component.html',
  /*styleUrls: ['./accountc.component.css']*/
})
export class AccountcComponent implements OnInit {

  constructor(public router:Router, public auth:AuthenticationService) { }
  newsfeed():void{
    this.router.navigate(['/newsfeed']);
  }
  blockacc():void{
    this.router.navigate(['/blockacc']);
  }
  accountupdate():void{
    this.router.navigate(['/accupdate']);
  }
  search():void{
    this.router.navigate(['/search']);
  }
  logout():void{
    this.router.navigate(['/logout']);
  }

  ngOnInit() {
  }

}

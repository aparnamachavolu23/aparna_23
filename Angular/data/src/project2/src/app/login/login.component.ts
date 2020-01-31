import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
errormessage:string;
authorized:boolean;
  constructor(public auth : AuthenticationService,public router : Router) {
    this.errormessage="invalid credentials";
    this.authorized="true";
   }

  ngOnInit() {
  }

}

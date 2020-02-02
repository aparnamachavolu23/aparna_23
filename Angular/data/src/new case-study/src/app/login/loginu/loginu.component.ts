import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';



@Component({
  selector: 'app-loginu',
  templateUrl: './loginu.component.html',
 /* styleUrls: ['./loginu.component.css']*/
})
export class LoginuComponent implements OnInit {
  autherized:boolean;
  upassword: string;
  errorMessage: string;

  
  constructor(public auth:AuthenticationService,public router:Router) {
    this.errorMessage="invalid credentials";
    this.autherized=true;
   }
  register():void{
    this.router.navigate(['register']);
  }
  signin(uname:HTMLInputElement,upassword:HTMLInputElement):void{
    if(this.auth.authenticate(uname.value, upassword.value))
    {
      this.router.navigate(['/gallery']);
    }
    else
    this.autherized=false;
  }

  ngOnInit() {
  }

}

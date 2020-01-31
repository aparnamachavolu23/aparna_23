import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';



@Component({
  selector: 'app-loginu',
  templateUrl: './loginu.component.html',
  styleUrls: ['./loginu.component.css']
})
export class LoginuComponent implements OnInit {
  authorise:string;
  upassword: any;
  auth: any;
  
  constructor(public _auth:AuthenticationService,public router:Router) { }
  register():void{
    this.router.navigate(['register']);
  }
  signin(uname:HTMLInputElement,upassword:HTMLInputElement):void{
    if(this.auth.authenticate(uname.value, this.upassword.value))
    {
      this.router.navigate(['/gallery']);
    }
    else
    this.authorise="invalid credentials"
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
 /* styleUrls: ['./register.component.css']*/
})
export class RegisterComponent implements OnInit {
 
  
  constructor(public router:Router) {}
   checkregister(txtusername:HTMLInputElement,txtpassword:HTMLInputElement,txtrepeatpassword:HTMLInputElement,txtmail:HTMLInputElement)
    {
   this.router.navigate(['/login']);
    }
  ngOnInit() {
  }
}


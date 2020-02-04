import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uploadmedia',
  templateUrl: './uploadmedia.component.html',
  styleUrls: ['./uploadmedia.component.css']
})
export class UploadmediaComponent implements OnInit {
 
  
  

  constructor(public router:Router) { }
singlemedia():void{
  this.router.navigate(['/singlemedia']);
}
multimedia():void{
this.router.navigate(['/multimedia']);
}

  ngOnInit() {
  }

}

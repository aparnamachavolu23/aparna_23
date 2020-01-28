import { Component, OnInit } from '@angular/core';
import { ConvertService } from '../service/convert.service';

@Component({
  selector: 'app-compone1',
  templateUrl: './compone1.component.html',
  styleUrls: ['./compone1.component.css']
})
export class Compone1Component implements OnInit {
uppercase:string;
  constructor(public convertService : ConvertService) {
  }
fun(txt : HTMLInputElement){
  this.uppercase=this.convertService.convertToUpper(txt.value);
   
}
  ngOnInit() {
  }

}

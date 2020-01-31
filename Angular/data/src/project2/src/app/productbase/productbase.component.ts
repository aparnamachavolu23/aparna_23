import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-productbase',
  templateUrl: './productbase.component.html',
  styleUrls: ['./productbase.component.css']
})
export class ProductbaseComponent implements OnInit {
  products : Array<Product>;

  constructor() {
    this.products = [
      new Product("First","Books",100),
      new Product("Second","Electronics",500),
      new Product("Third","Games",300)
    ];
    
   }
   addNewProduct(product:Product):void{
    this.products.push(product);
   }
  ngOnInit() {
  }

}

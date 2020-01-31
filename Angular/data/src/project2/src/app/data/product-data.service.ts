import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL = "http://localhost:3000/products";
@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(public http : HttpClient) {
  }
    getAllProducts(){
      return this.http.get(API_URL);
    
    }
   }


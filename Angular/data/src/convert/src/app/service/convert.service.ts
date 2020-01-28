import { Injectable } from '@angular/core';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class ConvertService {

  constructor() {}
  convertToUpper(str : string): string {
   return str.toUpperCase();

  }
   }


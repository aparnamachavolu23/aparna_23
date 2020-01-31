import { Injectable } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
getuserdetails : string;
  constructor() { }
  authenticate(userid : string, password : string): boolean{
    // hard-coded validation
    if(userid === "First" && password === "abc"){
      //  need to maintain session
      // sessionStorage object is auto available
      sessionStorage.setItem("user", userid);
      return true;
    }else{
      return false;
    }
  }

 
  isUserLoggedIn(): boolean{
    
    let user = sessionStorage.getItem('user');
    if(user == null)
      return false;
    return true;  
  }
logout(){
    sessionStorage.removeItem('user');
}
   getUserDetails() : string{
    let user = sessionStorage.getItem('user');
    return user;
  }
}

}

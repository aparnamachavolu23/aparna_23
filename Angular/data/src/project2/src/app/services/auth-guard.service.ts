import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(public auth : AuthenticationService, public router : Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
{
    
    if(this.auth.isUserLoggedIn())
        return true;
    else{
      // navigate to login component
      this.router.navigate(['/login']);
      return false;
    }    
        
}
}


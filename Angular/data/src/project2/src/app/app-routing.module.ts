import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { ProductbaseComponent } from './productbase/productbase.component';


const routes: Routes = [
  { path:"", redirectTo : "home", pathMatch: "full"},
  { path:"home", component: HomeComponent},
  { path:"contactus", component: ContactusComponent},
  { path:"aboutus", component: AboutusComponent},
  { path:"login", component: LoginComponent},
  { path:"logout", component: LogoutComponent, canActivate : [AuthGuardService]},
  { path:"product", component: ProductbaseComponent, canActivate : [AuthGuardService]},
    { path:"logout", component: LogoutComponent, canActivate : [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

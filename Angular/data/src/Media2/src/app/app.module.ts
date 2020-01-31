import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { FollowersComponent } from './followers/followers.component';
import { MymediaComponent } from './mymedia/mymedia.component';
import { UploadmediaComponent } from './uploadmedia/uploadmedia.component';
import { MenuComponent } from './menu/menu.component';
import { RouteroutletComponent } from './routeroutlet/routeroutlet.component';
import { LoginComponent } from './routeroutlet/login/login.component';
import { RegisterComponent } from './routeroutlet/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    FollowersComponent,
    MymediaComponent,
    UploadmediaComponent,
    MenuComponent,
    RouteroutletComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

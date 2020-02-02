import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Part1Component } from './head/part1/part1.component';
import { UserComponent } from './head/user/user.component';
import { LoginuComponent } from './login/loginu/loginu.component';
import { RegisterComponent } from './login/register/register.component';
import { SinglemediaComponent } from './media/singlemedia/singlemedia.component';
import { MultimediaComponent } from './media/multimedia/multimedia.component';
import { MymediaComponent } from './media/mymedia/mymedia.component';
import { GalleryComponent } from './media/gallery/gallery.component';
import { UploadmediaComponent } from './media/uploadmedia/uploadmedia.component';
import { FollowersComponent } from './media/followers/followers.component';
import { AccountComponent } from './account/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    Part1Component,
    UserComponent,
    LoginuComponent,
    RegisterComponent,
    SinglemediaComponent,
    MultimediaComponent,
    MymediaComponent,
    GalleryComponent,
    UploadmediaComponent,
    FollowersComponent,
    AccountComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

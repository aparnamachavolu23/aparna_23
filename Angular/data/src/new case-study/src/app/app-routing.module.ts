import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './login/register/register.component';
import { LoginuComponent } from './login/loginu/loginu.component';
import { MultimediaComponent } from './media/multimedia/multimedia.component';
import { SinglemediaComponent } from './media/singlemedia/singlemedia.component';
import { MymediaComponent } from './media/mymedia/mymedia.component';
import { GalleryComponent } from './media/gallery/gallery.component';
import { UploadmediaComponent } from './media/uploadmedia/uploadmedia.component';
import { FollowersComponent } from './media/followers/followers.component';

const routes: Routes = [
  {  path:"", redirectTo : "login", pathMatch: "full"},
  { path:"register", component: RegisterComponent},
  { path:"login", component: LoginuComponent},
  { path:"singlemedia",component :SinglemediaComponent},
  { path:"multimedia",component :MultimediaComponent},
  { path:"mymedia", component:MymediaComponent},
  { path:"gallery",component:GalleryComponent},
  { path:"uploadmedia",component:UploadmediaComponent},
  { path:"followers",component:FollowersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

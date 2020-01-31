import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustompipeComponent } from './pipes/custompipe/custompipe.component';
import { PipelinepPipe } from './pipes/pipelinep.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustompipeComponent,
    PipelinepPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Signh1Component } from './signh1/signh1.component';
import { Reg1Component } from './reg1/reg1.component';

@NgModule({
  declarations: [
    AppComponent,
    Signh1Component,
    Reg1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

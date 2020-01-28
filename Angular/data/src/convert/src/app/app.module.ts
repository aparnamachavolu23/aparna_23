import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Compone1Component } from './compone1/compone1.component';
import { Componentone1Component } from './componentone1/componentone1.component';

@NgModule({
  declarations: [
    AppComponent,
    Compone1Component,
    Componentone1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

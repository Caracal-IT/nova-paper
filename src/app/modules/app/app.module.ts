import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './components/app/app.component';
import {PaperModule} from "../paper/paper.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PaperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Pract1Component } from './pract1/pract1.component';
import { Pract2Component } from './pract2/pract2.component';
import { Pract3Component } from './pract3/pract3.component';
import { Pract4Component } from './pract4/pract4.component';
import { Pract5Component } from './pract5/pract5.component';
import { Pract6Component } from './pract6/pract6.component';
import { Pract7Component } from './pract7/pract7.component';
import { Pract8Component } from './pract8/pract8.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Pract1Component,
    Pract2Component,
    Pract3Component,
    Pract4Component,
    Pract5Component,
    Pract6Component,
    Pract7Component,
    Pract8Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

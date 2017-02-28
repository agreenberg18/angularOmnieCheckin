import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DateTimeComponent } from './date-time/date-time.component';
import { DateDateComponent } from './date-date/date-date.component';
import { DayDateComponent } from './day-date/day-date.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DateTimeComponent,
    DateDateComponent,
    DayDateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

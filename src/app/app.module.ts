import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SessionFormComponent } from './session-form/session-form.component';
import { ActivityFormComponent } from './activity-form/activity-form.component';


@NgModule({
  declarations: [
    AppComponent,
    SessionFormComponent,
    ActivityFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StortsmanComponent } from './stortsman/stortsman.component';
import { EntertainerComponent } from './entertainer/entertainer.component';
import { BootstrapExampleComponent } from './bootstrap-example/bootstrap-example.component';
import { BootspCardComponent } from './bootsp-card/bootsp-card.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StortsmanComponent,
    EntertainerComponent,
    BootstrapExampleComponent,
    BootspCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

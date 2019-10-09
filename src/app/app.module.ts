import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ButtonsModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { headerComponent } from "./header/header.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    ButtonsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}

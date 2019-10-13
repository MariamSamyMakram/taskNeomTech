import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ButtonsModule ,BsDropdownModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgCircleProgressModule } from 'ng-circle-progress';



import { AppComponent } from './app.component';
import { headerComponent } from "./header/header.component";
import { footerComponent } from "./footer/footer.component";
import { profileComponent } from "./profile/profile.component";
import { aboutComponet } from "./about/about.component";

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    profileComponent,
    aboutComponet,
    footerComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}

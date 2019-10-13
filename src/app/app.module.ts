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
      "backgroundPadding": 7,
      "radius": 60,
      "space": -2,
      "outerStrokeWidth": 2,
      "outerStrokeColor": "#808080",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 2,
      "title": [
        "working",
        "in",
        "progress"
      ],
      "titleFontSize": "12",
      "subtitleFontSize": "20",
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "clockwise": false
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}

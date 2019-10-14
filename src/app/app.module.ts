import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
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
      "radius": 40,
      "space": -3,
      "outerStrokeWidth": 4,
      "outerStrokeColor": "#ffffff",
      "innerStrokeColor": "#bfbfbf",
      "innerStrokeWidth": 2,
      "animateTitle": false,
      "animationDuration": 1400,
      "showTitle": true,
      "titleColor": "#ffffff",
      "titleFontSize":"20",
      "showUnits": true,
      "unitsColor":"#fff",
      "unitsFontSize":"20",
      "showSubtitle":false
        
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}

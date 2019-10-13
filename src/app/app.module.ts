import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ButtonsModule ,BsDropdownModule,TabsModule} from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



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
    TabsModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}

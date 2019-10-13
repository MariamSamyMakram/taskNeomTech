import { Component } from "@angular/core";
import {trigger,state,style,animate,transition } from '@angular/animations';


@Component({
    selector:'profile',
    templateUrl:'./profile.component.html',
    styleUrls:['./profile.component.css'],
    animations:[
        
    ]
})
export class profileComponent{
    nameFirst:string = "Mariam";
    nameLast:string ="Samy";
}
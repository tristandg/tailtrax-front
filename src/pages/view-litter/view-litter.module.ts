import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ViewLitterPage} from './view-litter';
import {ViewDogPageModule} from "../main/view-dog/view-dog.module";

@NgModule({
    declarations: [
        ViewLitterPage,
    ],
    imports: [
        IonicPageModule.forChild(ViewLitterPage),
        ViewDogPageModule
    ],
})
export class ViewLitterPageModule {
}

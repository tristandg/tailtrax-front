import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ViewBreedersPage} from './view-breeders';
import {ViewProfilePageModule} from "../view-profile/view-profile.module";

@NgModule({
    declarations: [
        ViewBreedersPage,
    ],
    imports: [
        IonicPageModule.forChild(ViewBreedersPage),
        ViewProfilePageModule
    ],
})
export class ViewBreedersPageModule {
}

import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ViewProfilePage} from './view-profile';
import {ComponentsModule} from "../../components/components.module";
import {ViewDogPageModule} from "../main/view-dog/view-dog.module";
import {ContactUserPageModule} from "../contact-user/contact-user.module";

@NgModule({
    declarations: [
        ViewProfilePage,
    ],
    imports: [
        IonicPageModule.forChild(ViewProfilePage),
        ComponentsModule,
        ViewDogPageModule,
        ContactUserPageModule
    ],
})
export class ViewProfilePageModule {
}

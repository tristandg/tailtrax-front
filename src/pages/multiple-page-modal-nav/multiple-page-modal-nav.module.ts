import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MultiplePageModalNavPage} from './multiple-page-modal-nav';
import {NavServiceProvider} from "../../providers/nav-service/nav-service";

@NgModule({
    declarations: [
        MultiplePageModalNavPage,
    ],
    imports: [
        IonicPageModule.forChild(MultiplePageModalNavPage),
    ],
    providers: [
        NavServiceProvider
    ]
})
export class MultiplePageModalNavPageModule {

    //
}

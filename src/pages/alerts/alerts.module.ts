import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {AlertsPage} from './alerts';
import {CreateAlertPageModule} from "../create-alert/create-alert.module";
import {PipesModule} from "../../pipes/pipes.module";
import {ViewAlertPageModule} from "../view-alert/view-alert.module";

@NgModule({
    declarations: [
        AlertsPage,
    ],
    imports: [
        IonicPageModule.forChild(AlertsPage),
        CreateAlertPageModule,
        PipesModule,
        ViewAlertPageModule
    ]
})
export class AlertsPageModule {
}

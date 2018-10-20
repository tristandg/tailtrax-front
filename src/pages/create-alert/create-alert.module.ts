import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {CreateAlertPage} from './create-alert';
import {AlertSettingsPageModule} from "../alert-settings/alert-settings.module";

@NgModule({
    declarations: [
        CreateAlertPage,
    ],
    imports: [
        IonicPageModule.forChild(CreateAlertPage),
        AlertSettingsPageModule
    ],
})
export class CreateAlertPageModule {
}

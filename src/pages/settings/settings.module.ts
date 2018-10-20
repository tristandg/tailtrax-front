import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SettingsPage} from './settings';
import {ChangePasswordPageModule} from "../change-password/change-password.module";

@NgModule({
    declarations: [
        SettingsPage,
    ],
    imports: [
        IonicPageModule.forChild(SettingsPage),
        ChangePasswordPageModule
    ],
})
export class SettingsPageModule {
}

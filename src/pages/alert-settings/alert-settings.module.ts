import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {AlertSettingsPage} from './alert-settings';
import {ChooseRecipientsPageModule} from "../choose-recipients/choose-recipients.module";
import {AlertWhereToSendPageModule} from "../alert-where-to-send/alert-where-to-send.module";
import {AlertAffectedLittersPageModule} from "../alert-affected-litters/alert-affected-litters.module";

@NgModule({
    declarations: [
        AlertSettingsPage,
    ],
    imports: [
        IonicPageModule.forChild(AlertSettingsPage),
        ChooseRecipientsPageModule,
        AlertWhereToSendPageModule,
        AlertAffectedLittersPageModule
    ],
})
export class AlertSettingsPageModule {
}

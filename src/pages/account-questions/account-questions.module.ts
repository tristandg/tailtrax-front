import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {AccountQuestionsPage} from './account-questions';
import {DirectivesModule} from "../../directives/directives.module";
import {UserProfilePageModule} from "../main/user-profile/user-profile.module";

@NgModule({
    declarations: [
        AccountQuestionsPage,
    ],
    imports: [
        IonicPageModule.forChild(AccountQuestionsPage),
        DirectivesModule,
        UserProfilePageModule
    ],
})
export class AccountQuestionsPageModule {
}

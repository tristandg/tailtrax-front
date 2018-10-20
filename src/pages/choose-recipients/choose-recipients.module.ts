import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ChooseRecipientsPage} from './choose-recipients';
import {PipesModule} from "../../pipes/pipes.module";

@NgModule({
    declarations: [
        ChooseRecipientsPage,
    ],
    imports: [
        IonicPageModule.forChild(ChooseRecipientsPage),
        PipesModule
    ],
})
export class ChooseRecipientsPageModule {
}

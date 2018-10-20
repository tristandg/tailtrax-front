import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {AlertAffectedLittersPage} from './alert-affected-litters';
import {PipesModule} from "../../pipes/pipes.module";

@NgModule({
    declarations: [
        AlertAffectedLittersPage,
    ],
    imports: [
        IonicPageModule.forChild(AlertAffectedLittersPage),
        PipesModule
    ],
})
export class AlertAffectedLittersPageModule {
}

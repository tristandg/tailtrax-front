import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ChooseDogPage} from './choose-dog';
import {PipesModule} from "../../pipes/pipes.module";

@NgModule({
    declarations: [
        ChooseDogPage,
    ],
    imports: [
        IonicPageModule.forChild(ChooseDogPage),
        PipesModule
    ],
})
export class ChooseDogPageModule {
}

import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {AddPatientPage} from './add-patient';
import {PipesModule} from "../../pipes/pipes.module";

@NgModule({
    declarations: [
        AddPatientPage,
    ],
    imports: [
        IonicPageModule.forChild(AddPatientPage),
        PipesModule
    ],
})
export class AddPatientPageModule {
}

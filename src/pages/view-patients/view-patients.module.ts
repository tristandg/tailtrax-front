import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ViewPatientsPage} from './view-patients';
import {AddPatientPageModule} from "../add-patient/add-patient.module";
import {PipesModule} from "../../pipes/pipes.module";

@NgModule({
    declarations: [
        ViewPatientsPage,
    ],
    imports: [
        IonicPageModule.forChild(ViewPatientsPage),
        AddPatientPageModule,
        PipesModule
    ],
})
export class ViewPatientsPageModule {
}

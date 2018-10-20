import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {AddHealthRecordPage} from './add-health-record';
import {HealthRecordsService} from "../../services/health-records/health-records.service";
import {ChooseMedicationsPageModule} from "../choose-medications/choose-medications.module";
import {ChooseVaccinePageModule} from "../choose-vaccine/choose-vaccine.module";

@NgModule({
    declarations: [
        AddHealthRecordPage,
    ],
    imports: [
        IonicPageModule.forChild(AddHealthRecordPage),
        ChooseMedicationsPageModule,
        ChooseVaccinePageModule,
    ],
    providers: [
        HealthRecordsService
    ]
})
export class AddHealthRecordPageModule {
}

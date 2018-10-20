import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ChooseMedicationsPage} from './choose-medications';
import {MedicationService} from "../../services/medication/medication.service";

@NgModule({
  declarations: [
    ChooseMedicationsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseMedicationsPage),
  ],

    providers: [
        MedicationService
    ]
})
export class ChooseMedicationsPageModule {}

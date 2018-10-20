import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ChooseVaccinePage} from './choose-vaccine';
import {VaccineService} from "../../services/vaccine/vaccine.service";

@NgModule({
  declarations: [
    ChooseVaccinePage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseVaccinePage),
  ],
    providers: [VaccineService]

})
export class ChooseVaccinePageModule {}

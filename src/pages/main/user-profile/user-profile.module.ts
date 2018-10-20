import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {UserProfilePage} from './user-profile';
import {AddDogPageModule} from "../../add-dog/add-dog.module";
import {ViewDogPageModule} from "../view-dog/view-dog.module";
import {ViewLitterPageModule} from "../../view-litter/view-litter.module";
import {AddLitterPageModule} from "../../add-litter/add-litter.module";
import {FindServiceComponent} from "../../../components/find-service/find-service";
import {AlertsPageModule} from "../../alerts/alerts.module";
import {ComponentsModule} from "../../../components/components.module";
import {ViewPatientsPageModule} from "../../view-patients/view-patients.module";
import {ViewBreedersPageModule} from "../../view-breeders/view-breeders.module";
import {ViewVetsPageModule} from "../../view-vets/view-vets.module";

@NgModule({
    declarations: [
        UserProfilePage,
        FindServiceComponent
    ],
    entryComponents: [
        FindServiceComponent
    ],
    imports: [
        IonicPageModule.forChild(UserProfilePage),
        AddDogPageModule,
        ViewDogPageModule,
        ViewLitterPageModule,
        AddLitterPageModule,
        ViewPatientsPageModule,
        ViewBreedersPageModule,
        ViewVetsPageModule,
        AlertsPageModule,
        ComponentsModule
    ],
})
export class UserProfilePageModule {


}

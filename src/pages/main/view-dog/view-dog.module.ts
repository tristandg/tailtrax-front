import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ViewDogPage} from './view-dog';
import {PipesModule} from "../../../pipes/pipes.module";
import {AddHealthRecordPageModule} from "../../add-health-record/add-health-record.module";
import {ViewHealthRecordPageModule} from "../../view-health-record/view-health-record.module";
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
    declarations: [
        ViewDogPage,
    ],
    imports: [
        IonicPageModule.forChild(ViewDogPage),
        AddHealthRecordPageModule,
        PipesModule,
        ViewHealthRecordPageModule,
        ComponentsModule

    ],
})
export class ViewDogPageModule {
}

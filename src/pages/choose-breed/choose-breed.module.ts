import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ChooseBreedPage} from './choose-breed';
import {HttpModule} from "../../services/http.module";
import {BreedService} from "../../services/pet_breed/breed.service";

@NgModule({
    declarations: [
        ChooseBreedPage,
    ],
    imports: [
        IonicPageModule.forChild(ChooseBreedPage),
        HttpModule
    ],
    providers: [
        BreedService
    ]
})
export class ChooseBreedPageModule {
}

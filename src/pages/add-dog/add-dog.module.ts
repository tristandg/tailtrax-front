import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {AddDogPage} from './add-dog';
import {DirectivesModule} from "../../directives/directives.module";
import {PetsService} from "../../services/pets/pets.service";
import {HttpClientModule} from "@angular/common/http";
import {ImagePicker} from "@ionic-native/image-picker";
import {BreedService} from "../../services/pet_breed/breed.service";
import {ChooseBreedPageModule} from "../choose-breed/choose-breed.module";
import {ColorService} from "../../services/pet_color/color.service";

@NgModule({
    declarations: [
        AddDogPage
    ],
    imports: [
        DirectivesModule,
        IonicPageModule.forChild(AddDogPage),
        HttpClientModule,
        ChooseBreedPageModule,
        DirectivesModule
    ],
    providers: [
        BreedService,
        ColorService,
        PetsService,
        ImagePicker
    ]
})
export class AddDogPageModule {
}

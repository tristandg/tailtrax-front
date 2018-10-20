import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {AddLitterPage} from './add-litter';
import {PetsService} from "../../services/pets/pets.service";
import {PipesModule} from "../../pipes/pipes.module";
import {ChooseLitterParentsPageModule} from "../choose-litter-parents/choose-litter-parents.module";

@NgModule({
    declarations: [
        AddLitterPage,
    ],
    imports: [
        PipesModule,
        IonicPageModule.forChild(AddLitterPage),
        ChooseLitterParentsPageModule
    ],

    providers: [
        PetsService
    ]
})
export class AddLitterPageModule {
}

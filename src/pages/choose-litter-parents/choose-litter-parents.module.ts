import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ChooseLitterParentsPage} from './choose-litter-parents';
import {PetsService} from "../../services/pets/pets.service";
import {ChooseDogPageModule} from "../choose-dog/choose-dog.module";
import {PipesModule} from "../../pipes/pipes.module";
import {LittersService} from "../../services/litters/litters.service";

@NgModule({
    declarations: [
        ChooseLitterParentsPage,
    ],
    imports: [
        IonicPageModule.forChild(ChooseLitterParentsPage),
        ChooseDogPageModule,
        PipesModule
    ],
    providers: [
        PetsService,
        LittersService,
    ]
})
export class ChooseLitterParentsPageModule {
}

import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {OnboardingPage} from './onboarding';
import {AddDogPageModule} from "../add-dog/add-dog.module";
import {SearchVetsPageModule} from "../search-vets/search-vets.module";
import {DirectivesModule} from "../../directives/directives.module";

@NgModule({
    declarations: [
        OnboardingPage,
    ],
    imports: [
        IonicPageModule.forChild(OnboardingPage),
        AddDogPageModule,
        SearchVetsPageModule,
        DirectivesModule
    ],
})
export class OnboardingPageModule {
}

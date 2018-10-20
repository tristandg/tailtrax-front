import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SearchVetsPage} from './search-vets';
import {SetupOrganizationPageModule} from "../setup-organization/setup-organization.module";

@NgModule({
    declarations: [
        SearchVetsPage,
    ],
    imports: [
        IonicPageModule.forChild(SearchVetsPage),
        SetupOrganizationPageModule
    ]
})
export class SearchVetsPageModule {
}

import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SetupOrganizationPage} from './setup-organization';

@NgModule({
  declarations: [
    SetupOrganizationPage,
  ],
  imports: [
    IonicPageModule.forChild(SetupOrganizationPage),
  ],
})
export class SetupOrganizationPageModule {}

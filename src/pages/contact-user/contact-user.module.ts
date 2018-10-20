import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ContactUserPage} from './contact-user';

@NgModule({
  declarations: [
    ContactUserPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactUserPage),
  ],
})
export class ContactUserPageModule {}

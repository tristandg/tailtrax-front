import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ChooseUserPage} from './choose-user';

@NgModule({
  declarations: [
    ChooseUserPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseUserPage),
  ],
})
export class ChooseUserPageModule {}

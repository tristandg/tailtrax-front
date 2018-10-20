import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {UnderAgePage} from './under-age';

@NgModule({
  declarations: [
    UnderAgePage,
  ],
  imports: [
    IonicPageModule.forChild(UnderAgePage),
  ],
})
export class UnderAgePageModule {}

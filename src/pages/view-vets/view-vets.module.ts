import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ViewVetsPage} from './view-vets';

@NgModule({
  declarations: [
    ViewVetsPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewVetsPage),
  ],
})
export class ViewVetsPageModule {}

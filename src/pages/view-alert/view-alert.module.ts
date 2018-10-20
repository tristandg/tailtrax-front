import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ViewAlertPage} from './view-alert';
import {PipesModule} from "../../pipes/pipes.module";

@NgModule({
  declarations: [
    ViewAlertPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewAlertPage),
      PipesModule
  ],
})
export class ViewAlertPageModule {}

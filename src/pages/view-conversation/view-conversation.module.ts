import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ViewConversationPage} from './view-conversation';
import {DirectivesModule} from "../../directives/directives.module";

@NgModule({
  declarations: [
    ViewConversationPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewConversationPage),
      DirectivesModule
  ],
})
export class ViewConversationPageModule {}

import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {AddPawPostPage} from './add-paw-post';

@NgModule({
  declarations: [
    AddPawPostPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPawPostPage),
  ],
})
export class AddPawPostPageModule {}

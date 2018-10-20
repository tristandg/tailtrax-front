import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MessagesPage} from './messages';
import {MessagingService} from "../../services/messaging.service";
import {ChooseUserPageModule} from "../choose-user/choose-user.module";
import {ViewConversationPageModule} from "../view-conversation/view-conversation.module";
import {PipesModule} from "../../pipes/pipes.module";

@NgModule({
    declarations: [
        MessagesPage,
    ],
    imports: [
        IonicPageModule.forChild(MessagesPage),
        ChooseUserPageModule,
        ViewConversationPageModule,
        PipesModule
    ],
    providers: [
        MessagingService
    ]
})
export class MessagesPageModule {
}

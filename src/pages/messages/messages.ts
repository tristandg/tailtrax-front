import {Component, OnInit} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {MessagingService} from "../../services/messaging.service";
import {Conversation} from "../../models/conversation";
import {ChooseUserPage} from "../choose-user/choose-user";
import {ViewConversationPage} from "../view-conversation/view-conversation";
import {UserProvider} from "../../providers/user/user";
import {User} from "../../models/User";

/**
 * Generated class for the MessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-messages',
    templateUrl: 'messages.html',
})
export class MessagesPage implements OnInit {

    conversations: Conversation[] = [];

    usersToFilter: User[] = [];

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public modalController: ModalController,
                public userProvider: UserProvider,
                public messagingService: MessagingService) {
    }

    viewConversation(conversation) {

        this.navCtrl.push(ViewConversationPage, {conversation});

    }

    getUserForMessage(conversation: Conversation) {

        for (const value of conversation.users) {
            if (value.id !== this.userProvider.getUser().id) {
                return value;
            }
        }
    }

    composeMessage() {

        let chooseUserPage = this.modalController.create(ChooseUserPage, {filteredUsers: this.usersToFilter});
        chooseUserPage.present().then(() => {
            chooseUserPage.onDidDismiss((chosenUser) => {
                if (chosenUser !== undefined) {
                    this.messagingService.createConversation(chosenUser.id).then((conversation) => {
                        this.conversations.push(conversation);
                        this.viewConversation(conversation);
                    });
                }
            });

        });

    }

    ionViewWillEnter() {

        this.usersToFilter = [];

        this.messagingService.getUserConversations().then((conversations) => {
            this.conversations = conversations;

            this.conversations.forEach(value => {
                this.usersToFilter.push(this.getUserForMessage(value));
            });
        });
    }


    getMessages(refresher?) {

        this.messagingService.getUserConversations().then((conversations) => {

            this.usersToFilter = [];

            this.conversations = conversations;

            this.conversations.forEach(value => {
                this.usersToFilter.push(this.getUserForMessage(value));
            });

            if (refresher !== undefined) {
                refresher.complete();

            }
        });

    }


    ngOnInit(): void {

    }

}

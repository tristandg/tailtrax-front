import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Scroll} from 'ionic-angular';
import {Conversation} from "../../models/conversation";
import {MessagingService} from "../../services/messaging.service";
import {Message} from "../../models/Message";
import {UserProvider} from "../../providers/user/user";
import {User} from "../../models/User";
import {Camera, CameraOptions} from "@ionic-native/camera";
import {FileTransferObject} from "@ionic-native/file-transfer";
import {HttpService} from "../../services/http-service";
import {StreamingMedia, StreamingVideoOptions} from "@ionic-native/streaming-media";

/**
 * Generated class for the ViewConversationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-view-conversation',
    templateUrl: 'view-conversation.html',
})
export class ViewConversationPage implements OnInit, OnDestroy {

    conversation: Conversation;

    messages: Message[] = [];
    message: string = "";

    currentUser: User;

    imageToPost = "";
    imageToPostURI = "";

    messageInterval: any;

    @ViewChild('messageScroll') messageScroll: Scroll;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public userProvider: UserProvider,
                public camera: Camera,
                public fileTransfer: FileTransferObject,
                private http: HttpService,
                private streamingMedia: StreamingMedia,
                public messageService: MessagingService) {
    }


    canSend() {


        return (this.message.trim() !== '');
    }

    sendMessage(event?) {

        let message = new Message();
        message.content = this.message;
        message.conversation_id = this.conversation.id;


        if (event === undefined) {
            this.sendFinalMessage(message);
        }

    }


    sendPhoto() {

        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            sourceType: 0,
            targetHeight: 640,
            targetWidth: 640,
        };


        this.camera.getPicture(options).then((imageURI) => {

            let message = new Message();

            this.imageToPostURI = imageURI;
            this.imageToPost = window['Ionic'].WebView.convertFileSrc(imageURI);

            var mediaType = ".jpg";

            if (imageURI.toLowerCase().includes(".mov")) {
                mediaType = ".mov";
                message.media_type = 1;
            } else {
                message.media_type = 0;
            }

            const headers = {'Access-Token': this.http.getAccessTokenHeader()["Access-Token"], "Extension": mediaType};

            this.fileTransfer.upload(this.imageToPostURI, this.http.getFullUrl('direct_messages/upload'), {headers: headers}).then((value) => {

                message.conversation_id = this.conversation.id;
                message.media = JSON.parse(value.response).location;
                message.content = "";

                this.sendFinalMessage(message);
            });

        }, (err) => {

        });
    }


    private sendFinalMessage(message) {
        this.messageService.createMessage(message).then((message) => {

            this.messages.push(message);
            this.message = "";
            this.imageToPost = "";
            this.imageToPostURI = "";
            this.scrollToBottom();
            document.getElementById('message-box').style.height = 60 + 'px';

        });
    }


    public scrollToBottomScrollView(scroll) {
        scroll.scrollTop = scroll.scrollHeight - scroll.clientHeight;
    }


    ngOnInit(): void {

        this.currentUser = this.userProvider.getUser();

        this.conversation = this.navParams.get('conversation');

        this.getConversations();

        this.messageInterval = setInterval(() => {
            this.getConversations();
        }, 5000);

    }


    playVideo(url) {

        let options: StreamingVideoOptions = {
            successCallback: () => {
                console.log('Video played')
            },
            errorCallback: (e) => {
                console.log('Error streaming')
            },
            orientation: 'portrait'
        };

        this.streamingMedia.playVideo(url, options);

    }

    private getConversations() {

        this.messageService.getConversation(this.conversation).then((newConversation) => {

            newConversation.direct_messages.forEach(value => {

                if (this.messages.filter((item) => item.id === value.id).length === 0) {
                    this.messages.push(value);
                }

            });

            this.scrollToBottom();

        });
    }

    public scrollToBottom() {
        setTimeout(() => {
            this.scrollToBottomScrollView(this.messageScroll._scrollContent.nativeElement);
        }, 500);
    }

    ngOnDestroy(): void {

        clearInterval(this.messageInterval);
    }
}

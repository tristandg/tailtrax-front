import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ViewController} from 'ionic-angular';
import {Camera, CameraOptions} from "@ionic-native/camera";
import {SocialPostsService} from "../../services/social_posts/social-posts.service";
import {FileTransferObject} from "@ionic-native/file-transfer";
import {HttpService} from "../../services/http-service";
import {SocialPost} from "../../models/social-post";

/**
 * Generated class for the AddPawPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-add-paw-post',
    templateUrl: 'add-paw-post.html',
})
export class AddPawPostPage {

    postMode = "text";
    imageToPost = "";
    imageToPostURI = "";
    caption = "";
    textPost = "";

    constructor(public navCtrl: NavController,
                public camera: Camera,
                public socialService: SocialPostsService,
                private http: HttpService,
                private viewController: ViewController,
                public fileTransfer: FileTransferObject,
                public loadingController: LoadingController,
                public navParams: NavParams) {
    }


    addPostImage() {

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

            this.imageToPostURI = imageURI;
            this.imageToPost = window['Ionic'].WebView.convertFileSrc(imageURI);

        }, (err) => {

        });

    }

    post() {

        let socialPost = new SocialPost();

        if (this.postMode === 'photo') {

            if (this.imageToPostURI !== '') {

                let pawPostLoading = this.loadingController.create({content: "Posting..."});
                pawPostLoading.present();

                this.fileTransfer.upload(this.imageToPostURI, this.http.getFullUrl('social_posts/upload'), {headers: this.http.getAccessTokenHeader()}).then((value) => {

                    socialPost.content = this.caption;
                    socialPost.media_type = 0;
                    socialPost.media = JSON.parse(value.response).location;

                    this.socialService.create(socialPost).then((socialPost) => {

                        pawPostLoading.dismissAll();
                        this.viewController.dismiss(socialPost);

                    }).catch(() => {

                        pawPostLoading.dismissAll();

                    });

                }).catch(() => {

                    pawPostLoading.dismissAll();

                });
            }


        } else {

            if (this.textPost.trim() !== '') {

                let pawPostLoading = this.loadingController.create({content: "Posting..."});
                pawPostLoading.present();

                socialPost.content = this.textPost;

                this.socialService.create(socialPost).then((socialPost) => {

                    pawPostLoading.dismissAll();
                    this.viewController.dismiss(socialPost);

                }).catch(() => {
                    pawPostLoading.dismissAll();

                });
            }

        }
    }

}

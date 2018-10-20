import {Component, OnInit} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";
import {User} from "../../models/User";
import {Camera, CameraOptions} from "@ionic-native/camera";
import {UsersService} from "../../services/users/users.service";
import {FileTransferObject} from "@ionic-native/file-transfer";
import {HttpService} from "../../services/http-service";
import {ChangePasswordPage} from "../change-password/change-password";

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html',
})
export class SettingsPage implements OnInit {

    public user: User;

    public profilePictureURI;

    public isEditing: boolean = false;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public userProvider: UserProvider,
                public userService: UsersService,
                public modalController: ModalController,
                private http: HttpService,
                public fileTransferObject: FileTransferObject,
                private camera: Camera) {
    }

    updateProfilePicture(image) {

        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            sourceType: 0,
            targetHeight: 160,
            targetWidth: 160,
        };

        this.camera.getPicture(options).then((imageURI) => {

            this.profilePictureURI = imageURI;

            image.src = window['Ionic'].WebView.convertFileSrc(imageURI);

            this.fileTransferObject.upload(this.profilePictureURI, this.http.getFullUrl('users/upload'), {headers: this.http.getAccessTokenHeader()}).then((value) => {

                this.user.profile_image = JSON.parse(value.response).location;

                this.userService.update(this.user).then(() => {

                    this.userProvider.setUser(this.user);
                });


            });
        }, (err) => {

        });
    }

    toggleEditProfile() {
        this.isEditing = !this.isEditing;
    }

    changePassword() {


        let changePasswordModal = this.modalController.create(ChangePasswordPage);

        changePasswordModal.present().then(() => {


        });

    }

    ngOnInit(): void {

        this.user = this.userProvider.getUser();
    }


}

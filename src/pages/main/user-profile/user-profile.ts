import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {
    App,
    Content,
    IonicPage,
    LoadingController,
    ModalController,
    NavController,
    NavParams,
    ToastController
} from 'ionic-angular';

import {Pet} from "../../../models/Pet";
import {ViewDogs} from "../../../components/view-dogs/view-dogs";
import {ViewLitters} from "../../../components/view-litters/view-litters";
import {UserProvider} from "../../../providers/user/user";
import {User} from "../../../models/User";
import {AlertsPage} from "../../alerts/alerts";

/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-user-profile',
    templateUrl: 'user-profile.html',
})
export class UserProfilePage implements OnInit {

    activeSelection = "dogs";

    dogs: Pet[] = [];

    viewDogs = ViewDogs;
    viewLitters = ViewLitters;


    user: User;

    @ViewChild(Content) content: Content;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public modalCtrl: ModalController,
                public loading: LoadingController,
                public toast: ToastController,
                public userProvider: UserProvider,
                public app: App,
                public zone: NgZone) {
    }


    select(option) {

        this.activeSelection = option;
    }


    viewAlerts() {

        this.navCtrl.push(AlertsPage);

    }

    ngOnInit(): void {

        this.user = this.userProvider.getUser();
    }

}

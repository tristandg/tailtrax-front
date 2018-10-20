import {Component, OnInit, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform, Tabs} from 'ionic-angular';
import {UserProfilePage} from "../user-profile/user-profile";
import {PawPostsPage} from "../../paw-posts/paw-posts";
import {MessagesPage} from "../../messages/messages";
import {SettingsPage} from "../../settings/settings";
import {Push, PushObject, PushOptions} from "@ionic-native/push";
import {UsersService} from "../../../services/users/users.service";
import {StatusBar} from "@ionic-native/status-bar";

/**
 * Generated class for the MainAppPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-main-app',
    templateUrl: 'main-app.html',
})
export class MainAppPage implements OnInit {

    @ViewChild('myTabs') tabRef: Tabs;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public push: Push,
                public statusBar: StatusBar,
                public userService: UsersService,
                public platform: Platform) {
    }

    tab1Root: any = UserProfilePage;
    tab2Root: any = PawPostsPage;
    tab3Root: any = MessagesPage;
    tab4Root: any = SettingsPage;


    updateProfilePicture() {

    }

    ionViewDidLoad() {
        // this.tabRef.setTabbarPosition(100,0);
    }

    ngOnInit(): void {

        this.statusBar.show();

        if (this.platform.is('ios') || this.platform.is('android')) {
            this.setupPushNotifications();
        }

        if (this.platform.is('core')) {

            this.tabRef.setTabbarPosition(0,0);
        }
    }

    private setupPushNotifications() {
        const options: PushOptions = {
            android: {},
            ios: {
                alert: 'true',
                badge: false,
                sound: 'true',
                clearBadge: 'true'
            },
            windows: {},
            browser: {
                pushServiceURL: 'http://push.api.phonegap.com/v1/push'
            }
        };

        const pushObject: PushObject = this.push.init(options);

        pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));

        pushObject.on('registration').subscribe((registration: any) => {

            let deviceType = this.platform.is('android') ? "android" : "ios";

            this.userService.updateToken(registration.registrationId, deviceType);

        });

        pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
    }
}

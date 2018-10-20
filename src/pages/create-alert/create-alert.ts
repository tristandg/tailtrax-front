import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AlertSettingsPage} from "../alert-settings/alert-settings";
import {UserProvider} from "../../providers/user/user";

/**
 * Generated class for the CreateAlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-create-alert',
    templateUrl: 'create-alert.html',
})
export class CreateAlertPage {

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public userProvider: UserProvider) {

    }

    alertContent: string = "";


    alertSettings() {

        this.navCtrl.push(AlertSettingsPage, {alertContent: this.alertContent})

    }


}

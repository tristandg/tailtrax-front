import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AccountQuestionsPage} from "../account-questions/account-questions";

/**
 * Generated class for the EmailConfirmationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-email-confirmation',
    templateUrl: 'email-confirmation.html',
})
export class EmailConfirmationPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad EmailConfirmationPage');
    }

    okay() {

        this.navCtrl.setRoot(AccountQuestionsPage);
    }

}

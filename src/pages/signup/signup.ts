import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SignInPage} from "../signin/signin";
import {AccountQuestionsPage} from "../account-questions/account-questions";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html',
})
export class SignUpPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SignupPage');
    }

    join() {

        this.navCtrl.setRoot(AccountQuestionsPage, {}, {animate: false});

    }


    signIn() {

        this.navCtrl.setRoot(SignInPage, {}, {animate: false});

    }

}

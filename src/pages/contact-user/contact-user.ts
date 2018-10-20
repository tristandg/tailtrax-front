import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the ContactUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-contact-user',
    templateUrl: 'contact-user.html',
})
export class ContactUserPage implements OnInit {


    public email: string;
    public phone: string;

    constructor(public navCtrl: NavController, public navParams: NavParams) {


    }


    ngOnInit(): void {

        this.email = this.navParams.get('email');
        this.phone = this.navParams.get('phone');

    }

}

import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {Alert} from "../../models/alert";
import {AlertService} from "../../services/alert/alert.service";
import {UserProvider} from "../../providers/user/user";

/**
 * Generated class for the ViewAlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-view-alert',
    templateUrl: 'view-alert.html',
})
export class ViewAlertPage implements OnInit {

    public alert: Alert;
    public deleteCallback: any;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public alertService: AlertService,
                public alertCtrl: AlertController,
                public toastController: ToastController,
                public userProvider: UserProvider) {
    }


    removeAlert() {

        let alert = this.alertCtrl.create({
            title: 'Remove alert?',
            message: 'Are you sure?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {


                    }
                },
                {
                    text: 'Yes',
                    handler: () => {
                        this.alertService.delete(this.alert.id).then(() => {
                            this.deleteCallback();
                            this.navCtrl.pop();
                            this.toastController.create({
                                message: "Alert Deleted",
                                position: 'top',
                                duration: 2000,
                                cssClass: 'green-toast'
                            }).present();

                        });
                    }
                }
            ]
        });
        alert.present();
    }


    ngOnInit(): void {

        this.alert = this.navParams.get('alert');
        this.deleteCallback = this.navParams.get('deleteCallback');

    }

}

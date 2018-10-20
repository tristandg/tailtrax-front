import {Component, OnInit} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {CreateAlertPage} from "../create-alert/create-alert";
import {AlertService} from "../../services/alert/alert.service";
import {Alert} from "../../models/alert";
import {ViewAlertPage} from "../view-alert/view-alert";
import {UserProvider} from "../../providers/user/user";

/**
 * Generated class for the AlertsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-alerts',
    templateUrl: 'alerts.html',
})
export class AlertsPage implements OnInit {

    /* holds all the alerts */
    alerts: Alert[] = [];

    /* Set if we are currently loading content */
    loading: boolean = true;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public alertService: AlertService,
                public loadingController: LoadingController,
                public userProvider: UserProvider) {

    }


    viewAlert(alert) {

        this.navCtrl.push(ViewAlertPage, {

            alert: alert, deleteCallback: () => {

                this.alerts.splice(this.alerts.indexOf(alert), 1);

            }
        });
    }

    createNewAlert() {

        this.navCtrl.push(CreateAlertPage);
    }

    ngOnInit(): void {

        let loadingAlerts = this.loadingController.create({content: "Loading"});
        loadingAlerts.present();
        this.loading = true;
        this.alertService.getAll().then((alerts) => {
            this.alerts = alerts;
            this.loading = false;
            loadingAlerts.dismissAll();
        });
    }
}

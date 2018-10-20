import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {ChooseRecipientsPage} from "../choose-recipients/choose-recipients";
import {AlertService} from "../../services/alert/alert.service";
import {MainAppPage} from "../main/main-app/main-app";
import {AlertWhereToSendPage} from "../alert-where-to-send/alert-where-to-send";
import {AlertAffectedLittersPage} from "../alert-affected-litters/alert-affected-litters";

/**
 * Generated class for the AlertSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-alert-settings',
    templateUrl: 'alert-settings.html',
})
export class AlertSettingsPage implements OnInit {


    urgent: boolean = false;

    selectedDogs: any[] = [];

    selectedLitters: any[] = [];

    alertContent: string = "";


    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public alertService: AlertService,
                public loadingController: LoadingController,
                public alertController: AlertController,
                public toastController: ToastController) {
    }


    saveAlert() {


        let affectedPets = this.selectedDogs.map(dog => dog.id);

        let affectedLitters = this.selectedLitters.map(litter => litter.id);

        if (affectedPets.length !== 0) {

            let sendingAlertLoader = this.loadingController.create({content: "Sending..."});

            sendingAlertLoader.present();

            this.alertService.create(affectedPets, affectedLitters,  this.alertContent, this.urgent).then(() => {

                sendingAlertLoader.dismissAll();

                this.navCtrl.setRoot(MainAppPage);

                this.toastController.create({
                    message: "Alert Sent!",
                    position: 'top',
                    duration: 2000,
                    cssClass: 'green-toast'
                }).present();

            }).catch(() => {

                this.toastController.create({
                    message: "Alert could not be sent.",
                    position: 'top',
                    duration: 2000,
                    cssClass: 'green-toast'
                }).present();

                sendingAlertLoader.dismissAll();
            });

        } else {

            let noRecipients = this.alertController.create({
                message: "You need to select affected pets.",
                buttons: [{
                    text: "Ok",
                    role: "cancel",
                    cssClass: "dismissButton"

                }]
            });

            noRecipients.present();
        }

    }

    chooseRecipients() {

        this.navCtrl.push(ChooseRecipientsPage, {selectedDogs: this.selectedDogs});
    }

    chooseAffectedLitters() {

        this.navCtrl.push(AlertAffectedLittersPage, {selectedLitters: this.selectedLitters});

    }


    chooseWhereToSend() {

        this.navCtrl.push(AlertWhereToSendPage, {selectedDogs: this.selectedDogs});
    }

    ngOnInit(): void {

        this.alertContent = this.navParams.get('alertContent');
    }

}

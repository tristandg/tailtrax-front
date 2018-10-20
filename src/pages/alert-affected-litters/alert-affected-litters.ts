import {Component, OnInit} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {LittersService} from "../../services/litters/litters.service";
import {Litter} from "../../models/Litter";

/**
 * Generated class for the AlertAffectedLittersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-alert-affected-litters',
    templateUrl: 'alert-affected-litters.html',
})
export class AlertAffectedLittersPage implements OnInit {

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public loadingController: LoadingController,
                public toastController: ToastController,
                public litterService: LittersService) {
    }

    loading: boolean = true;

    litters: Litter[] = [];

    selectedLitters: any[] = [];

    ngOnInit(): void {

        this.selectedLitters = this.navParams.get('selectedLitters');

        let litterLoading = this.loadingController.create({content: "Loading..."});

        this.litterService.getLitters().then((litters) => {

            this.litters = litters;

            this.selectLitters();

            litterLoading.dismissAll();

            this.loading = false;

        }).catch(() => {

            litterLoading.dismissAll();

            let errorLoadingToast = this.toastController.create({
                message: "Something went wrong",
                cssClass: 'red-toast',
                duration: 1000
            });

            errorLoadingToast.present();

            this.loading = false;

        });
    }


    private selectLitters() {

        this.litters.forEach((litter: any) => {

            for (let i = 0; i < this.selectedLitters.length; i++) {

                if (litter.id === this.selectedLitters[i].id) {
                    this.selectedLitters[i] = litter;
                    this.selectedLitters[i].selected = true;
                }
            }
        });
    }

    toggleLitter(litter) {

        if (litter.selected === undefined)
            litter.selected = false;

        if (litter.selected === false) {
            this.selectedLitters.push(litter);
            litter.selected = true;

        } else {

            for (let i = 0; i < this.selectedLitters.length; i++) {
                if (this.selectedLitters[i].id === litter.id) {
                    this.selectedLitters[i].selected = false;
                    this.selectedLitters.splice(i, 1);

                }
            }
        }
    }

}

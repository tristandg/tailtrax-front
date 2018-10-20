import {Component, OnInit, ViewChild} from '@angular/core';
import {Content, ModalController, NavController, NavParams, ToastController} from 'ionic-angular';
import {AddLitterPage} from "../../pages/add-litter/add-litter";
import {MultiplePageModalNavPage} from "../../pages/multiple-page-modal-nav/multiple-page-modal-nav";
import {Litter} from "../../models/Litter";
import {LittersService} from "../../services/litters/litters.service";
import {ViewLitterPage} from "../../pages/view-litter/view-litter";

/**
 * Generated class for the ViewLittersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'view-litters',
    templateUrl: 'view-litters.html',
})
export class ViewLitters implements OnInit {

    @ViewChild(Content) content: Content;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public modalController: ModalController,
                public toast: ToastController,
                public litterService: LittersService) {

    }



    public litters: Litter[] = [];


    viewLitter(litter) {

        let viewLitterModal = this.modalController.create(ViewLitterPage, {litter: litter});

        viewLitterModal.present().then(() => {

            //TODO

        });
    }

    addLitter() {

        let litterModalController = this.modalController.create(MultiplePageModalNavPage, {root: AddLitterPage});

        litterModalController.present().then(() => {

            litterModalController.onDidDismiss(litter => {

                if (litter !== undefined && litter !==null) {
                    this.addLitterToArray(litter);
                }

            });
        });

    }


    private addLitterToArray(litter) {
        this.litters.push(litter);
        this.toast.create({
            message: "Litter Created",
            position: 'top',
            duration: 2000,
            cssClass: 'green-toast'
        }).present();

    }

    ngOnInit(): void {

        this.litterService.getLitters().then((litters) => {

            this.litters = litters;


        });

    }

}

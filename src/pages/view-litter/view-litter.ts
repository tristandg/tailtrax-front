import {Component, OnInit} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
import {Litter} from "../../models/Litter";
import {ViewDogPage} from "../main/view-dog/view-dog";
import {MultiplePageModalNavPage} from "../multiple-page-modal-nav/multiple-page-modal-nav";

/**
 * Generated class for the ViewLitterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-view-litter',
    templateUrl: 'view-litter.html',
})
export class ViewLitterPage implements OnInit {

    litter: Litter = null;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public viewController: ViewController,
                public modalController: ModalController) {
    }


    viewDog(dog) {

        let viewDogModal = this.modalController.create(MultiplePageModalNavPage, {root: ViewDogPage, params: {dog: dog}});

        viewDogModal.present().then(() => {

        });
    }

    ngOnInit(): void {


        this.litter = this.navParams.get('litter');

    }


}

import {Component, OnInit} from '@angular/core';
import {App, LoadingController, ModalController, NavController, NavParams, ToastController} from 'ionic-angular';
import {Pet} from "../../models/Pet";
import {AddDogPage} from "../../pages/add-dog/add-dog";
import {PetsService} from "../../services/pets/pets.service";
import {ViewDogPage} from "../../pages/main/view-dog/view-dog";

/**
 * Generated class for the ViewDogsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'view-dogs',
    templateUrl: 'view-dogs.html',
})
export class ViewDogs implements OnInit {

    dogs: Pet[] = [];

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public modalCtrl: ModalController,
                public petService: PetsService,
                public loading: LoadingController,
                public toast: ToastController,
                public app: App,
                public modalController: ModalController) {
    }


    public getMyDogs() {

        return this.petService.getPets().then(myDogs => this.dogs = myDogs);
    }

    viewDog(dog) {

       // this.modalController.create(MultiplePageModalNavPage, {root: ViewDogPage, params: {dog}}).present();


        this.navCtrl.push(ViewDogPage, {dog});
    }

    addDog() {

        let addDogModal = this.modalCtrl.create(AddDogPage);

        addDogModal.onDidDismiss(petReturnedFromModal => {
            if (petReturnedFromModal != null) {
                this.dogs.push(petReturnedFromModal);
                this.toast.create({
                    message: "Put Added",
                    position: 'top',
                    duration: 2000,
                    cssClass: 'green-toast'
                }).present();

            }
        });

        addDogModal.present();

    }

    ngOnInit(): void {

        const dogLoadingIndicator = this.loading.create({content: "Loading Dogs..."});

        dogLoadingIndicator.present();

        this.getMyDogs().then(() => dogLoadingIndicator.dismiss());
    }
}


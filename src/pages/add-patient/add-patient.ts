import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import {BusinessService} from "../../services/businesses/business.service";
import {PetsService} from "../../services/pets/pets.service";
import {Pet} from "../../models/Pet";

/**
 * Generated class for the AddPatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-add-patient',
    templateUrl: 'add-patient.html',
})
export class AddPatientPage implements OnInit {

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public viewController: ViewController,
                public businessService: BusinessService,
                public alertController: AlertController,
                public toastController: ToastController,
                public petService: PetsService) {
    }


    dogs: Pet[] = [];
    _dogs: Pet[] = [];

    /* Pets that are already a patient so we don't want to display them */

    excluded: Pet[] = [];

    search: string = "";


    onInput() {


        this.dogs = this._dogs.filter((dog) => {
            return dog.name.toLowerCase().includes(this.search.trim().toLowerCase());
        });

    }

    ngOnInit(): void {

        this.excluded = this.navParams.get('exclude');

        this.petService.getAllPets().then((pets) => {

            this.dogs = pets;

            this._dogs = this.dogs = this.filterExcludedDogs();

        });
    }

    private filterExcludedDogs(): Pet[] {

        return this.dogs.filter((dog) => {

            return this.excluded.findIndex(excludedDog => excludedDog.id == dog.id) == -1;
        })
    }

    selectDog(dog) {

        let alert = this.alertController.create({
            title: 'Add Patient',
            message: 'Are you sure you want to add ' + dog.name + ' as a patient?',
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

                        this.businessService.addPetToVet(dog.id).then(() => {

                            this.toastController.create({
                                message: "Patient Added",
                                position: 'top',
                                duration: 2000,
                                cssClass: 'green-toast'
                            }).present();

                            this.viewController.dismiss(dog);

                        });

                    }
                }
            ]
        });

        alert.present();
    }


}

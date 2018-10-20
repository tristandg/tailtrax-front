import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Pet} from "../../models/Pet";
import {PetsService} from "../../services/pets/pets.service";

/**
 * Generated class for the ChooseDogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-choose-dog',
    templateUrl: 'choose-dog.html',
})
export class ChooseDogPage implements OnInit {

    dogToExclude: Pet = null;
    gender: string = null;
    dogs: Pet[] = [];

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public petService: PetsService,
                public viewController: ViewController) {
    }

    selectDog(dog) {

        this.viewController.dismiss(dog);
    }

    type() {

        if (this.gender === null) {
            return "Dog";
        } else if (this.gender === 'f') {
            return "Mother";
        } else {
            return "Father"
        }
    }

    ngOnInit(): void {

        this.dogToExclude = this.navParams.get('exclude');

        if (this.navParams.get('gender') !== undefined) {
            this.gender = this.navParams.get('gender');
        }

        if (this.navParams.get('dogs') !== undefined) {
            this.dogs = this.navParams.get('dogs');
        } else {

            this.petService.getAllPets().then((pets) => {

                this.dogs = pets;

            });
        }

        if (this.gender != null && this.dogs !== undefined) {
            this.dogs = this.dogs.filter(dog => {
                return dog.gender === 1 && this.gender === 'm' || dog.gender === 0 && this.gender === 'f';
            });
        }
    }

}

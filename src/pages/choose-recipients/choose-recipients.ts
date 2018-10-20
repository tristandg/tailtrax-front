import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {PetsService} from "../../services/pets/pets.service";
import {Pet} from "../../models/Pet";
import {BusinessService} from "../../services/businesses/business.service";

/**
 * Generated class for the ChooseRecipientsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-choose-recipients',
    templateUrl: 'choose-recipients.html',
})
export class ChooseRecipientsPage {

    dogs: Pet[] = [];
    _dogs: Pet[] = [];
    selectedDogs: any[] = [];

    search: string = "";

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public petService: PetsService,
                public businessService: BusinessService,
                public viewController: ViewController) {
    }

    toggleDog(dog) {

        if (dog.selected === undefined)
            dog.selected = false;

        if (dog.selected === false) {
            this.selectedDogs.push(dog);
            dog.selected = true;

        } else {

            for (let i = 0; i < this.selectedDogs.length; i++) {
                if (this.selectedDogs[i].id === dog.id) {
                    this.selectedDogs[i].selected = false;
                    this.selectedDogs.splice(i, 1);

                }
            }
        }
    }


    onInput() {

        this.dogs = this._dogs.filter((dog) => {
            return dog.name.toLowerCase().includes(this.search.trim().toLowerCase());
        });


    }


    ngOnInit(): void {

        this.selectedDogs = this.navParams.get('selectedDogs');

        this.businessService.getPetsForVet().then((pets) => {

            this._dogs = this.dogs = pets;

            this.dogs.forEach((dog: any) => {

                for (let i = 0; i < this.selectedDogs.length; i++) {

                    if (dog.id === this.selectedDogs[i].id) {
                        this.selectedDogs[i] = dog;
                        this.selectedDogs[i].selected = true;
                    }
                }
            });
        });
    }
}

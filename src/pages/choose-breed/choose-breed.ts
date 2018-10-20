import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {BreedService} from "../../services/pet_breed/breed.service";
import {PetBreed} from "../../models/pet-breed";

/**
 * Generated class for the ChooseBreedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-choose-breed',
    templateUrl: 'choose-breed.html',
})
export class ChooseBreedPage implements OnInit {

    search: string = "";

    _breeds: PetBreed[] = [];
    breeds: PetBreed[] = [];

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public viewController: ViewController,
                public breedService: BreedService) {
    }

    onInput($event) {

        this.breeds = this._breeds.filter((item) => {

            return (item.name.toLowerCase().includes(this.search.toLowerCase()))
        });

    }

    chooseBreed(breed) {


        this.viewController.dismiss(breed);

    }



    ngOnInit(): void {

        this.breedService.getAllBreeds().then((breeds) => this.breeds = this._breeds = breeds);

    }

}

import {Component, OnInit} from '@angular/core';
import {App, IonicPage, LoadingController, NavController, NavParams, ViewController} from 'ionic-angular';
import {PetsService} from "../../services/pets/pets.service";
import {Pet} from "../../models/Pet";
import {ChooseLitterParentsPage} from "../choose-litter-parents/choose-litter-parents";

/**
 * Generated class for the AddLitterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-add-litter',
    templateUrl: 'add-litter.html',
})
export class AddLitterPage implements OnInit {

    dogs: Pet[] = [];

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public viewController: ViewController,
                public petService: PetsService,
                public loadingController: LoadingController,
                public app: App) {
    }


    public getMyDogs() {

        return this.petService.getPets().then(myDogs => this.dogs = myDogs);
    }


    public chooseDogForLitter(dog) {


        this.navCtrl.push(ChooseLitterParentsPage, {dog: dog});

    }


    ngOnInit(): void {


        let myDogs = this.loadingController.create({content: "Loading..."});

        this.getMyDogs().then(() => {
            myDogs.dismissAll();
        });


    }

}

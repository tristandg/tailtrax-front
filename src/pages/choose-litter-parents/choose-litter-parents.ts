import {Component, OnInit} from '@angular/core';
import {App, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {Pet} from "../../models/Pet";
import {PetsService} from "../../services/pets/pets.service";
import {ChooseDogPage} from "../choose-dog/choose-dog";
import {LittersService} from "../../services/litters/litters.service";
import {Litter} from "../../models/Litter";
import {NavServiceProvider} from "../../providers/nav-service/nav-service";

/**
 * Generated class for the ChooseLitterParentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-choose-litter-parents',
    templateUrl: 'choose-litter-parents.html',
})
export class ChooseLitterParentsPage implements OnInit {

    puppy: Pet;

    parents: Pet[] = [];
    mother: Pet = null;
    father: Pet = null;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public petService: PetsService,
                public litterService: LittersService,
                public modalController: ModalController,
                public navService: NavServiceProvider,
                public app: App) {


    }


    chooseDad() {

        let chooseDogModal = this.modalController.create(ChooseDogPage, {
            dogs: this.parents,
            gender: 'm',
            exclude: this.puppy
        });



        chooseDogModal.present().then(() => {

            chooseDogModal.onDidDismiss((father) => {
                if (father !== undefined) {
                    this.father = father
                }
            });

        });


    }

    chooseMom() {

        let chooseDogModal = this.modalController.create(ChooseDogPage, {
            dogs: this.parents,
            gender: 'f',
            exclude: this.puppy
        });

        chooseDogModal.present().then(() => {

            chooseDogModal.onDidDismiss((mother) => {
                if (mother !== undefined) {
                    this.mother = mother
                }
            });
        });


    }

    createLitter() {

        let litterToCreate = new Litter();
        litterToCreate.pet_dad = this.father;
        litterToCreate.pet_dad_id = this.father.id;
        litterToCreate.pet_mom = this.mother;
        litterToCreate.pet_mom_id = this.mother.id;
        litterToCreate.birthday = this.puppy.birthday;
        litterToCreate.name = this.puppy.name;
        litterToCreate.pets = [];
        litterToCreate.pets.push(this.puppy);


        this.litterService.create(litterToCreate).then((litterCreated) => {

            this.navService.dismissViewController(litterCreated).then(() => {

                //Dismissed

            })


        });
    }

    private getAllPets() {

        return this.petService.getAllPets();

    }


    ngOnInit(): void {

        this.puppy = this.navParams.get('dog');

        this.getAllPets().then((pets) => {

            this.parents = pets.filter((petToFilter) => petToFilter.id != this.puppy.id);

        });

    }

}

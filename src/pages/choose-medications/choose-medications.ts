import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {MedicationService} from "../../services/medication/medication.service";
import {Medication} from "../../models/medication";

/**
 * Generated class for the ChooseMedicationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-choose-medications',
    templateUrl: 'choose-medications.html',
})
export class ChooseMedicationsPage implements OnInit {

    _medications: Medication[] = [];
    medications: Medication[] = [];

    search: string = "";


    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public viewController: ViewController,
                public medicationService: MedicationService) {
    }

    onInput($event) {

        this.medications = this._medications.filter((item) => {

            return (item.name.toLowerCase().includes(this.search.toLowerCase()))
        });

    }

    chooseMedication(medication) {


        this.viewController.dismiss(medication);

    }

    ngOnInit(): void {

        this.medicationService.getMedications().then((medications) => {

            this.medications = this._medications = medications;

        });
    }


}

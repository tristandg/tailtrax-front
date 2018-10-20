import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Medication} from "../../models/medication";
import {VaccineService} from "../../services/vaccine/vaccine.service";

/**
 * Generated class for the ChooseVaccinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-choose-vaccine',
    templateUrl: 'choose-vaccine.html',
})
export class ChooseVaccinePage implements OnInit {


    _vaccines: Medication[] = [];
    vaccines: Medication[] = [];

    search: string = "";


    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public viewController: ViewController,
                public vaccineService: VaccineService) {
    }

    onInput($event) {

        this.vaccines = this._vaccines.filter((item) => {

            return (item.name.toLowerCase().includes(this.search.toLowerCase()))
        });

    }

    chooseVaccine(vaccine) {

        this.viewController.dismiss(vaccine);

    }

    ngOnInit(): void {

        this.vaccineService.getVaccines().then((vaccines) => {

            this.vaccines = this._vaccines = vaccines;

        });
    }


}

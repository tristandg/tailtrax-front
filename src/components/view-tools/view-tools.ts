import {Component} from '@angular/core';
import {CreateAlertPage} from "../../pages/create-alert/create-alert";
import {NavController} from "ionic-angular";
import {ViewPatientsPage} from "../../pages/view-patients/view-patients";
import {ViewBreedersPage} from "../../pages/view-breeders/view-breeders";

/**
 * Generated class for the ViewToolsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'view-tools',
    templateUrl: 'view-tools.html'
})
export class ViewToolsComponent {


    constructor(public navCtrl: NavController) {


    }

    viewPatientDatabase() {
        this.navCtrl.push(ViewPatientsPage);

    }

    viewBreederDatabase() {
        this.navCtrl.push(ViewBreedersPage);

    }


    sendAlert() {
        this.navCtrl.push(CreateAlertPage);
    }

}

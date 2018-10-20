import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {PetHealthRecord} from "../../models/pet-health-record";

/**
 * Generated class for the ViewHealthRecordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-view-health-record',
    templateUrl: 'view-health-record.html',
})
export class ViewHealthRecordPage implements OnInit {

    healthRecord: PetHealthRecord;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public viewController: ViewController) {

    }

    ngOnInit(): void {

        this.healthRecord = this.navParams.get('record');

    }


}

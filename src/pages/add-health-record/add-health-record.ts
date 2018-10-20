import {Component, OnInit} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ChooseMedicationsPage} from "../choose-medications/choose-medications";
import {ChooseVaccinePage} from "../choose-vaccine/choose-vaccine";
import {Medication} from "../../models/medication";
import {Vaccine} from "../../models/vaccine";
import {HealthRecordsService} from "../../services/health-records/health-records.service";
import {PetHealthRecord} from "../../models/pet-health-record";
import {Pet} from "../../models/Pet";

/**
 * Generated class for the AddHealthRecordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-add-health-record',
    templateUrl: 'add-health-record.html',
})
export class AddHealthRecordPage implements OnInit {

    dog: Pet = null;

    addHealthRecordForm: FormGroup;

    medication: Medication = null;
    vaccine: Vaccine = null;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public modalController: ModalController,
                public viewController: ViewController,
                public healthRecordService: HealthRecordsService) {
    }

    chooseVaccines() {

        let chooseVaccineModal = this.modalController.create(ChooseVaccinePage);
        chooseVaccineModal.present().then(() => {
            chooseVaccineModal.onDidDismiss((vaccineToAdd) => {
                if (vaccineToAdd !== undefined && vaccineToAdd !== null) {
                    this.vaccine = vaccineToAdd;
                }
            });

        });

    }

    chooseMedication() {

        let chooseMedicationModal = this.modalController.create(ChooseMedicationsPage);
        chooseMedicationModal.present().then(() => {
            chooseMedicationModal.onDidDismiss((medicationToAdd) => {
                if (medicationToAdd !== undefined && medicationToAdd !== null) {
                    this.medication = medicationToAdd;
                }
            });

        });
    }

    saveHealthRecord() {

        let petHealthRecord = new PetHealthRecord();

        petHealthRecord.check_in_date = this.addHealthRecordForm.get('health_check_in_date').value as Date;
        if (this.medication != null) {
            petHealthRecord.medication_id = this.medication.id;
        }
        if (this.vaccine != null) {
            petHealthRecord.vaccine_id = this.vaccine.id;
        }
        petHealthRecord.pet_id = this.dog.id;
        petHealthRecord.condition_notes = this.addHealthRecordForm.get('description').value;

        this.healthRecordService.createHealthRecord(petHealthRecord).then((petHelthRecord) => {

            this.viewController.dismiss(petHelthRecord);

        });

    }

    canSubmit() {

        return this.addHealthRecordForm.valid;
    }


    ngOnInit(): void {

        this.dog = this.navParams.get('dog');

        this.addHealthRecordForm = new FormGroup({
            health_check_in_date: new FormControl('', [Validators.required]),
            description: new FormControl('', []),
        });
    }


}

import {Component, OnInit} from '@angular/core';
import {IonicPage, LoadingController, ModalController, NavController, NavParams, ToastController} from 'ionic-angular';
import {AddPatientPage} from "../add-patient/add-patient";
import {Pet} from "../../models/Pet";
import {BusinessService} from "../../services/businesses/business.service";

/**
 * Generated class for the ViewPatientsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-view-patients',
    templateUrl: 'view-patients.html',
})
export class ViewPatientsPage implements OnInit {


    public patients: Pet[] = [];
    public _patients: Pet[] = [];
    public loading: boolean = true;


    search: string = "";

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public loadingController: LoadingController,
                public businessService: BusinessService,
                public toastController: ToastController,
                public modalController: ModalController) {
    }


    onInput() {


        this.patients = this._patients.filter((dog) => {
            return dog.name.toLowerCase().includes(this.search.trim().toLowerCase());
        });

    }

    addPatient() {


        let addPatientModal = this.modalController.create(AddPatientPage, {exclude: this.patients});

        addPatientModal.present().then(() => {

            addPatientModal.onDidDismiss((dog) => {

                if (dog !== undefined && dog !== null) {

                    this.patients.push(dog);
                    this._patients = this.patients;
                    this.onInput();
                }

            });
        });

    }

    viewPatient() {


    }

    ngOnInit(): void {


        this.loading = true;

        let patientsLoadingController = this.loadingController.create({content: "Loading Patients"});

        patientsLoadingController.present().then(() => {

            this.businessService.getPetsForVet().then((pets) => {

                this._patients = this.patients = pets;
                this.loading = false;

                patientsLoadingController.dismissAll();

            }).catch(() => {

                this.loading = false;
                patientsLoadingController.dismissAll();

                this.toastController.create({
                    message: "Something went wrong.",
                    position: 'top',
                    duration: 2000,
                    cssClass: 'red-toast'
                }).present();


            });


        });


    }

}

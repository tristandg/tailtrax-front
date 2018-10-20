import {Component, OnInit} from '@angular/core';
import {IonicPage, LoadingController, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
import {Pet} from "../../../models/Pet";
import {PetsService} from "../../../services/pets/pets.service";
import {AddHealthRecordPage} from "../../add-health-record/add-health-record";
import {PetHealthRecord} from "../../../models/pet-health-record";
import {HealthRecordsService} from "../../../services/health-records/health-records.service";
import {ViewHealthRecordPage} from "../../view-health-record/view-health-record";
import {NavServiceProvider} from "../../../providers/nav-service/nav-service";
import {StatusBar} from "@ionic-native/status-bar";
import {UserProvider} from "../../../providers/user/user";
import {Camera, CameraOptions} from "@ionic-native/camera";
import {FileTransferObject} from "@ionic-native/file-transfer";
import {HttpService} from "../../../services/http-service";

/**
 * Generated class for the ViewDogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-view-dog',
    templateUrl: 'view-dog.html',
})
export class ViewDogPage implements OnInit {

    dog: Pet;

    /* Editable Fields */
    supplemental: string = "";
    food: string = "";
    health_issue: string = "";

    activeSelection = "profile";

    healthRecords: PetHealthRecord[] = [];

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public viewController: ViewController,
                public petService: PetsService,
                public loadingController: LoadingController,
                public healthRecordService: HealthRecordsService,
                public navService: NavServiceProvider,
                public modalController: ModalController,
                public userProvider: UserProvider,
                public statusBar: StatusBar,
                private http: HttpService,
                public fileTransferObject: FileTransferObject,
                private camera: Camera) {
    }


    dismiss() {

        this.navService.dismissViewController();

    }

    informationChanged() {


        return this.supplemental !== this.dog.supplemental
            || this.food !== this.dog.food || this.health_issue !== this.dog.health_issue;
    }

    viewHealthRecord(healthRecord) {

        let viewHealthRecordModal = this.navCtrl.push(ViewHealthRecordPage, {record: healthRecord});

    }


    updateProfilePicture() {

        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            sourceType: 0,
            targetHeight: 300,
            targetWidth: 300,
        };

        this.camera.getPicture(options).then((imageURI) => {

            this.dog.pet_profile_pic = imageURI;

            this.dog.pet_profile_pic = window['Ionic'].WebView.convertFileSrc(imageURI);

            this.fileTransferObject.upload(imageURI, this.http.getFullUrl('pets/upload'), {headers: this.http.getAccessTokenHeader()}).then((value) => {

                this.dog.pet_profile_pic = JSON.parse(value.response).location;

            });
        }, (err) => {

        });
    }

    updateDog() {

        let updatingDog = this.loadingController.create({content: "Updating...."});

        updatingDog.present().then(() => {

            this.dog.supplemental = this.supplemental;
            this.dog.food = this.food;
            this.dog.health_issue = this.health_issue;

            this.petService.update(this.dog).then((dog) => {
                this.dog = dog;
                updatingDog.dismiss();
            })


        });

    }

    addHealthRecord() {

        let healthRecordPage = this.modalController.create(AddHealthRecordPage, {dog: this.dog});

        healthRecordPage.present().then(() => {

            healthRecordPage.onDidDismiss(healthRecord => {

                if (healthRecord !== null && healthRecord !== undefined) {

                    this.healthRecords.push(healthRecord);
                }
            });

        });

    }


    select(option) {
        this.activeSelection = option;
    }


    ngOnInit(): void {

        this.statusBar.styleLightContent();

        this.dog = this.navParams.get('dog');

        this.supplemental = this.dog.supplemental;
        this.food = this.dog.food;
        this.health_issue = this.dog.health_issue;
        this.getHealthRecords();
    }

    private getHealthRecords() {
        this.healthRecordService.getPetRecords(this.dog.id).then((healthRecords) => {
            this.healthRecords = healthRecords;
        });
    }
}

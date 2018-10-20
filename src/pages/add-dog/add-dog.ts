import {Component, NgZone, OnInit} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PetsService} from "../../services/pets/pets.service";
import {Pet} from "../../models/Pet";
import {ImagePicker} from "@ionic-native/image-picker";
import {PetBreed} from "../../models/pet-breed";
import {BreedService} from "../../services/pet_breed/breed.service";
import {ChooseBreedPage} from "../choose-breed/choose-breed";
import {ColorService} from "../../services/pet_color/color.service";
import {PetColor} from "../../models/pet-color";
import {Camera, CameraOptions} from "@ionic-native/camera";
import {FileTransferObject} from "@ionic-native/file-transfer";
import {HttpService} from "../../services/http-service";

/**
 * Generated class for the AddDogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-add-dog',
    templateUrl: 'add-dog.html',
})
export class AddDogPage implements OnInit {

    private defaultPetProfilePic = "/assets/dog.png";

    /* Should this class handle submitting the pet */
    shouldSubmit: boolean = true;

    addDogForm: FormGroup;

    /* Returned from services */
    breeds: PetBreed[] = [];
    colors: PetColor[] = [];

    /* Image URL selected */
    dogImageUri: string = "";

    /* Breed of the dog that was selected */
    breed: PetBreed;

    /* If we are currently submitting the form */
    submitting: boolean = false;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public petService: PetsService,
                public viewController: ViewController,
                public modalController: ModalController,
                private imagePicker: ImagePicker,
                private fileTransferObject: FileTransferObject,
                private http: HttpService,
                private camera: Camera,
                private ngZone: NgZone,
                private breedService: BreedService,
                private colorService: ColorService) {
    }



    chooseBreed() {

        let chooseBreedModal = this.modalController.create(ChooseBreedPage);

        chooseBreedModal.present().then(() => {

            chooseBreedModal.onDidDismiss(breed => {

                if (breed != null) {
                    this.breed = breed;
                }

            });

        });


    }

    chooseImage(image) {

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

            this.dogImageUri = imageURI;
            image.src = window['Ionic'].WebView.convertFileSrc(imageURI);

        }, (err) => {

        });
    }


    saveDog() {


        if (this.addDogForm.valid) {

            /* Set that we are currently submitting the form */
            this.submitting = true;

            /* Generate the pet that we are creating */
            const petToCreate = this.getPetToCreate();

            if (this.shouldSubmit) {

                if (this.pictureWasSelected()) {

                    this.fileTransferObject.upload(this.dogImageUri, this.http.getFullUrl('pets/upload'), {headers: this.http.getAccessTokenHeader()}).then((value) => {

                        petToCreate.pet_profile_pic = JSON.parse(value.response).location;

                        this.createAndDismiss(petToCreate);

                    });

                } else {

                    /* Set the default profile picture */

                    petToCreate.pet_profile_pic = this.defaultPetProfilePic;

                    this.createAndDismiss(petToCreate);
                }

            } else {


                this.viewController.dismiss(petToCreate).then(() => {
                    //Controller Dismissed

                });
            }
        }
    }

    private getPetToCreate() {

        const petToCreate = new Pet();
        petToCreate.name = this.addDogForm.get('name').value;
        petToCreate.gender = this.addDogForm.get('gender').value;
        petToCreate.birthday = this.addDogForm.get('birthday').value;
        petToCreate.pet_color = this.addDogForm.get('color').value;
        petToCreate.pet_breed = this.breed;
        petToCreate.microchip = this.addDogForm.get('microchip').value;
        petToCreate.akc_reg_number = this.addDogForm.get('akc_reg_number').value;
        petToCreate.akc_reg_date = this.addDogForm.get('akc_reg_date').value;

        return petToCreate;
    }

    private pictureWasSelected() {
        return this.dogImageUri !== "";
    }

    private createAndDismiss(petToCreate) {
        this.petService.create(petToCreate).then(petReturned => {
            this.viewController.dismiss(petReturned).then(() => {
                //Controller Dismissed

            });
        });
    }

    canSubmit() {

        return this.addDogForm.valid && this.breed != null && this.submitting === false;
    }


    ngOnInit(): void {


        let shouldSubmitParam = this.navParams.get('shouldSubmit');
        if (shouldSubmitParam !== undefined) {
            this.shouldSubmit = shouldSubmitParam;
        }

        this.getAllBreeds();
        this.getAllColors();

        this.addDogForm = new FormGroup({
            name: new FormControl('', [Validators.required]),
            gender: new FormControl('', [Validators.required]),
            birthday: new FormControl('', [Validators.required]),
            color: new FormControl('', [Validators.required]),
            microchip: new FormControl('', []),
            akc_reg_number: new FormControl('', []),
            akc_reg_date: new FormControl('', []),
        });
    }

    private getAllColors() {
        this.colorService.getAllColors().then((colors) => this.colors = colors);
    }


    private getAllBreeds() {
        this.breedService.getAllBreeds().then((breeds) => this.breeds = breeds);
    }
}

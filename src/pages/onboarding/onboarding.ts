import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, LoadingController, ModalController, NavController, NavParams} from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";
import {UsersService} from "../../services/users/users.service";
import {User} from "../../models/User";
import {MainAppPage} from "../main/main-app/main-app";
import {AddDogPage} from "../add-dog/add-dog";
import {Pet} from "../../models/Pet";
import {Litter} from "../../models/Litter";
import {LittersService} from "../../services/litters/litters.service";
import {Facebook, FacebookLoginResponse} from "@ionic-native/facebook";
import {SearchVetsPage} from "../search-vets/search-vets";
import {BusinessService} from "../../services/businesses/business.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Business} from "../../models/business";
import {StatusBar} from "@ionic-native/status-bar";
import {GooglePlus} from "@ionic-native/google-plus";

/**
 * Generated class for the OnboardingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-onboarding',
    templateUrl: 'onboarding.html',
})


export class OnboardingPage implements OnInit {

    phase: number = 1;
    overview: number = 1;
    signInType: string = "";

    name: string = "";

    /* Login */
    email: string = "";
    password: string = "";

    emailFormControl: FormControl = new FormControl('', [Validators.email]);

    /* Sign Up */
    firstName: string = "";
    lastName: string = "";
    username: string = "";
    userAddress: string = "";

    /* Choose Role */
    petLover: boolean = true;
    petParent: boolean = false;
    breeder: boolean = false;
    veterinarian: boolean = false;

    /* Pet Parent Add Pets */
    petsAdded: Pet[] = [];

    /* Breeder Create Litter */
    mom: Pet = null;
    dad: Pet = null;
    children: Pet[] = [];


    organizationFormGroup: FormGroup;
    autocomplete: any;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public modalController: ModalController,
                public userProvider: UserProvider,
                public loadingController: LoadingController,
                public userService: UsersService,
                public facebookService: Facebook,
                public googleService: GooglePlus,
                public statusBar: StatusBar,
                public alertController: AlertController,
                public businessService: BusinessService,
                public litterService: LittersService) {

    }


    login() {


        let user = new User();
        user.email = this.email;
        user.username = this.email;
        user.password = this.password;

        this.userService.login(user).then((loggedInUser) => {

            this.userProvider.setUser(loggedInUser);
            this.navCtrl.setRoot(MainAppPage);

        }).catch(() => {

            let wrongPasswordController = this.alertController.create({
                message: "You entered an invalid password",
                buttons: [{
                    text: "Dismiss",
                    role: "cancel",
                    cssClass: "dismissButton"

                }]
            });

            wrongPasswordController.present();

        });
    }

    chosenRole() {

        return this.petParent || this.breeder || this.veterinarian;
    }


    getUserRole() {

        return this.userProvider.getUser().role;
    }

    addPet(arrayToAdd) {

        let addPetModal = this.modalController.create(AddDogPage, {shouldSubmit: true});

        addPetModal.present().then(() => {
            addPetModal.onDidDismiss((pet) => {
                if (pet !== undefined) {
                    arrayToAdd.push(pet);
                }
            });
        });

    }


    searchVets() {

        let searchVetsModal = this.modalController.create(SearchVetsPage);

        searchVetsModal.present().then(() => {

            searchVetsModal.onDidDismiss((data) => {

                if (data !== undefined && data !== null) {

                    if (data === 'setup') {

                        this.next();

                    } else {

                        this.businessService.addUser(data.id).then(() => {

                            this.finish();

                        });
                    }
                }

            });
        });

    }

    finish() {

        this.navCtrl.setRoot(MainAppPage);

    }

    chooseMom() {

        let addPetModal = this.modalController.create(AddDogPage, {shouldSubmit: true});

        addPetModal.present().then(() => {
            addPetModal.onDidDismiss((pet) => {
                if (pet !== undefined) {
                    this.mom = pet;
                }
            });
        });
    }

    chooseFather() {

        let addPetModal = this.modalController.create(AddDogPage, {shouldSubmit: true});

        addPetModal.present().then(() => {
            addPetModal.onDidDismiss((pet) => {
                if (pet !== undefined) {
                    this.dad = pet;
                }
            });
        });
    }

    createLitter() {

        let litterToCreate = new Litter();
        litterToCreate.pet_dad = this.dad;
        litterToCreate.pet_dad_id = this.dad.id;
        litterToCreate.pet_mom = this.mom;
        litterToCreate.pet_mom_id = this.mom.id;
        litterToCreate.birthday = this.children[0].birthday;
        litterToCreate.name = this.dad.name + " and " + this.mom.name;
        litterToCreate.pets = this.children;

        this.litterService.create(litterToCreate).then((litterCreated) => {

            this.finish();

        });
    }

    register() {
        let splitAddress = this.getSplitAddress();
        let user = new User();
        user.email = this.email;
        user.username = this.username;
        user.password = this.password;
        user.first_name = this.firstName;
        user.last_name = this.lastName;

        if (splitAddress.length > 2) {
            user.address = splitAddress[0];
            user.city = splitAddress[1];
            user.state = splitAddress[2].trim().split(" ")[0];
            user.zip = splitAddress[2].trim().split(" ")[1];
        }


        if (this.petParent) {
            user.role = 'pet_parent';
        } else if (this.breeder) {
            user.role = 'litter_administrator';
        } else if (this.veterinarian) {
            user.role = 'vet';
        }

        let settingUpToast = this.loadingController.create({content: "Setting up Account..."});
        settingUpToast.present();

        this.userService.signup(user).then(async (loggedInUser) => {

            this.userProvider.setUser(loggedInUser);

            settingUpToast.dismissAll();

            this.next();

        });
    }

    private getSplitAddress() {

        if (this.autocomplete === undefined || this.autocomplete.getPlace() === undefined) {
            return [];
        }

        return this.autocomplete.getPlace().formatted_address.split(",");
    }

    lookupEmail() {

        this.name = name;

        this.userService.getUsersName(this.email).then((name) => {

            this.name = name;
            this.next();

        });

    }

    signIn(type) {

        if (type === 'facebook') {

            this.facebookService.login(['public_profile', 'email'])
                .then((res: FacebookLoginResponse) => {

                    console.log("Resp!", res.authResponse.accessToken);

                    this.userService.loginFacebook(res.authResponse.accessToken).then((response) => {

                        if (response.new_user === true) {

                            this.email = response.email;
                            this.firstName = response.first_name;
                            this.lastName = response.last_name;
                            this.next();
                            this.next();
                        } else {

                            this.userProvider.setUser(response);
                            this.navCtrl.setRoot(MainAppPage);
                        }
                    });

                }).catch(e => console.log('Error logging into Facebook', e));

        }
        if (type === 'google') {

            this.googleService.login({})
                .then(res => {

                    this.userService.loginGoogle(res.idToken).then((response) => {
                        if (response.new_user === true) {

                            this.email = response.email;
                            this.firstName = response.given_name;
                            this.lastName = response.family_name;
                            this.next();
                            this.next();

                        } else {
                            this.userProvider.setUser(response);
                            this.navCtrl.setRoot(MainAppPage);
                        }

                    });
                })
                .catch(err => console.error(err));
        }
        else {

            this.signInType = type;
            this.phase++;
        }
    }

    back() {

        if (this.phase !== 1) {
            this.phase--;
        } else {
            if (this.overview !== 3) {
                this.overview--;
            }
        }
    }


    next() {

        if (this.overview !== 3) {
            this.overview++;
        } else {
            this.phase++;
        }

        if (this.phase === 4) {
            setTimeout(() => {
                this.setupAutoComplete();
            }, 1000);
        }
    }


    signUpFormValid() {

        console.log(this.getSplitAddress().length);

        return this.username.length !== 0 && this.password.length !== 0 && this.firstName.length !== 0 && this.lastName.length !== 0 && this.getSplitAddress().length >= 4

    }


    ngOnInit(): void {


        setTimeout(() => {
            this.statusBar.hide();
            this.setupAutoComplete();
        }, 500);


        // Create the autocomplete object, restricting the search to geographical
        // location types.


        this.organizationFormGroup = new FormGroup({
            name: new FormControl('', [Validators.required]),
            desc: new FormControl('', []),
            street_number: new FormControl('', [Validators.required]),
            route: new FormControl('', [Validators.required]),
            locality: new FormControl('', [Validators.required]),
            administrative_area_level_1: new FormControl('', [Validators.required]),
            postal_code: new FormControl('', [Validators.required]),
            phone: new FormControl('', []),
            email: new FormControl('', [Validators.email]),
            website: new FormControl('', []),

        });

    }

    createBusiness() {

        let business = new Business();
        business.name = this.organizationFormGroup.get('name').value;
        business.state = this.organizationFormGroup.get('administrative_area_level_1').value;
        business.address = this.organizationFormGroup.get('street_number').value + " " + this.organizationFormGroup.get('route').value;
        business.city = this.organizationFormGroup.get('locality').value;
        business.zip = this.organizationFormGroup.get('postal_code').value;
        business.email = this.organizationFormGroup.get('email').value;
        business.website = this.organizationFormGroup.get('website').value;
        business.phone = this.organizationFormGroup.get('phone').value;

        this.businessService.create(business).then(() => {
            this.finish();
        }).catch(() => {
            //Something bad happened
        });
    }

    private setupAutoComplete() {


        let autocomplete = this.autocomplete = new window['google'].maps.places.Autocomplete(document.getElementById('autocomplete').getElementsByTagName('input')[0],
            {types: ['geocode']});

        autocomplete.addListener('place_changed', () => {

            console.log(this.autocomplete.getPlace().formatted_address);

            const componentForm = {
                street_number: 'short_name',
                route: 'long_name',
                locality: 'long_name',
                administrative_area_level_1: 'short_name',
                postal_code: 'short_name'
            };

            // Get the place details from the autocomplete object.
            const place = autocomplete.getPlace();

            // Get each component of the address from the place details
            // and fill the corresponding field on the form.
            for (let i = 0; i < place.address_components.length; i++) {
                let addressType = place.address_components[i].types[0];
                if (componentForm[addressType]) {
                    if (addressType !== null) {
                        let val = place.address_components[i][componentForm[addressType]];
                        console.log(addressType);
                        this.organizationFormGroup.get(addressType).setValue(val);
                    }

                }
            }

        });
    }
}

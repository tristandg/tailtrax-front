import {Component, OnInit} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {User} from "../../models/User";
import {PetsService} from "../../services/pets/pets.service";
import {Pet} from "../../models/Pet";
import {BusinessService} from "../../services/businesses/business.service";
import {Business} from "../../models/business";
import {UsersService} from "../../services/users/users.service";
import {FollowService} from "../../services/follow/follow.service";
import {Follow} from "../../models/follow";
import {UserProvider} from "../../providers/user/user";
import {ContactUserPage} from "../contact-user/contact-user";

/**
 * Generated class for the ViewProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-view-profile',
    templateUrl: 'view-profile.html',
})
export class ViewProfilePage implements OnInit {


    public user: User;
    public dogs: Pet[] = [];
    public follows: Follow[] = [];
    public business: Business[] = [];
    public following: Follow = null;

    activeSelection = "profile";

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public modalController: ModalController,
                public businessService: BusinessService,
                public followService: FollowService,
                public userService: UsersService,
                public userProvider: UserProvider,
                public petService: PetsService) {
    }

    ngOnInit(): void {

        this.followService.getUserFollows().then((follows) => {

            this.follows = follows;

            this.determineIfFollowing();

        });

        this.user = this.navParams.get('user');

        this.userService.getSpecificUser(this.user.id).then((user) => {

            this.user = user;

        });

        if (this.user.role === 'pet_parent') {

            this.petService.getPetForUser(this.user.id).then((pets) => {
                this.dogs = pets;
            });

        } else if (this.user.role === 'vet') {

            this.businessService.getUserBusinesses(this.user.id).then((businesses) => {
                this.business = businesses;
            });
        }
    }

    viewDog(dog) {

        // this.modalController.create(MultiplePageModalNavPage, {root: ViewDogPage, params: {dog}}).present();

    }


    contact() {

        let email = "";
        let phone = "";

        if (this.business.length !== 0) {
            email = this.business[0].email;
            phone = this.business[0].phone;
        } else {

            email = this.user.email;
            phone = this.user.phone;
        }

        this.navCtrl.push(ContactUserPage, {email: email, phone: phone});
    }

    determineIfFollowing() {

        let follows = this.follows.filter((item) => item.follow_id === this.user.id);

        if (follows.length !== 0) {

            this.following = follows[0];

        }

    }

    follow() {

        if (this.following === null) {

            let follow = new Follow();
            follow.follow_id = this.user.id;

            this.followService.create(follow).then((follow) => {
                this.following = follow;


            });

        } else {
            this.followService.delete(this.following).then(() => {
                this.following = null;
            });

        }


    }

    addFriend() {

    }

    select(option) {

        this.activeSelection = option;
    }

}

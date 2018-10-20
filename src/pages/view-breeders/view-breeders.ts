import {Component, OnInit} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {UsersService} from "../../services/users/users.service";
import {User} from "../../models/User";
import {ViewProfilePage} from "../view-profile/view-profile";

/**
 * Generated class for the ViewBreedersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-view-breeders',
    templateUrl: 'view-breeders.html',
})
export class ViewBreedersPage implements OnInit {

    private role = "litter_administrator";

    public breeders: User[] = [];
    public _breeders: User[] = [];

    public loading: boolean = true;

    search: string = "";

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public loadingController: LoadingController,
                public userService: UsersService) {
    }


    onInput() {

        this.breeders = this.breeders.filter((breeder) => {
            return breeder.first_name.toLowerCase().includes(this.search.trim().toLowerCase()) || breeder.last_name.toLowerCase().includes(this.search.trim().toLowerCase());
        });

    }


    viewBreeder(breeder) {

        this.navCtrl.push(ViewProfilePage, {user: breeder});

    }

    ngOnInit(): void {

        let breederLoadingController = this.loadingController.create({content: "Loading Breeders"});

        breederLoadingController.present().then(() => {

            this.userService.getUsersByRole(this.role).then((users) => {

                this.loading = false;
                this._breeders = this.breeders = users;


                breederLoadingController.dismissAll();

            }).catch(() => {

                breederLoadingController.dismissAll();

            });

        });


    }

}

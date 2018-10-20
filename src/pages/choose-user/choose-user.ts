import {Component, OnInit, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Searchbar, ViewController} from 'ionic-angular';
import {UsersService} from "../../services/users/users.service";
import {User} from "../../models/User";

/**
 * Generated class for the ChooseUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-choose-user',
    templateUrl: 'choose-user.html',
})
export class ChooseUserPage implements OnInit {

    @ViewChild('searchField') searchField: Searchbar;

    users: User[] = [];

    search: string = "";

    filterUsers: User[] = [];

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public viewController: ViewController,
                public userService: UsersService) {
    }

    selectUser(user) {

        this.viewController.dismiss(user);
    }

    onInput() {


        if (this.search.trim() !== '' && this.search.trim().length > 1)
            this.userService.search(this.search).then((users) => {
                this.users = users;
                this.removeUsers();
            });
    }

    private removeUsers() {
        for (const value of this.filterUsers) {
            for (let i = 0; i < this.users.length; i++) {
                if (this.users[i].id === value.id) {
                    this.users.splice(i, 1);
                    break;
                }
            }
        }
    }

    ngOnInit(): void {


        if (this.navParams.get('filteredUsers') !== undefined && this.navParams.get('filteredUsers') !== null) {
            this.filterUsers = this.navParams.get('filteredUsers');
            console.log(this.filterUsers);
        }

        setTimeout(() => {
            this.searchField.setFocus();
        }, 500);

    }

}

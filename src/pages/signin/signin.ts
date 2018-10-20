import {Component, OnInit} from '@angular/core';
import {Keyboard, NavController} from "ionic-angular";
import {SignUpPage} from "../signup/signup";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../services/users/users.service";
import {User} from "../../models/User";
import {MainAppPage} from "../main/main-app/main-app";
import {UserProvider} from "../../providers/user/user";

/**
 * Generated class for the SignupComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'signin',
    templateUrl: 'signin.html'
})
export class SignInPage implements OnInit {


    loginFormGroup: FormGroup;

    constructor(public navCtrl: NavController,
                public keyboard: Keyboard,
                public userService: UsersService,
                public userProvider: UserProvider) {

    }

    createAccount() {

        this.navCtrl.setRoot(SignUpPage, {}, {animate: false});

    }


    signIn() {

        const {username, password} = this.getLoginCredentials();
        const user = SignInPage.createUser(username, password);

        this.userService.login(user).then(user => {

            this.userProvider.setUser(user);

            this.navCtrl.setRoot(MainAppPage);

        });
    }

    private static createUser(username: any, password: any) {
        const user = new User();
        user.username = username;
        user.password = password;
        return user;
    }

    private getLoginCredentials() {
        const username = this.loginFormGroup.get('email').value;
        const password = this.loginFormGroup.get('password').value;
        return {username, password};
    }

    ngOnInit(): void {

        this.loginFormGroup = new FormGroup({
            email: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required])
        });
    }
}

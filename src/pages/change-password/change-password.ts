import {Component, OnInit} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import {UsersService} from "../../services/users/users.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

/**
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-change-password',
    templateUrl: 'change-password.html',
})
export class ChangePasswordPage implements OnInit {

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public viewController: ViewController,
                public loadingController: LoadingController,
                public toastController: ToastController,
                public userService: UsersService) {
    }


    changePasswordForm: FormGroup;

    ngOnInit(): void {

        this.changePasswordForm = new FormGroup({
            old_password: new FormControl('', [Validators.required]),
            new_password: new FormControl('', [Validators.required]),
        });

    }


    submit() {

        console.log(this.changePasswordForm.get('old_password').value);

        let changingPasswordLoader = this.loadingController.create({content: "Changing..."});

        changingPasswordLoader.present().then(() => {

            this.userService.changePassword(this.changePasswordForm.get('old_password').value, this.changePasswordForm.get('new_password').value).then((response) => {

                if (response === false) {

                    this.toastController.create({
                        message: "You entered a wrong old password",
                        position: 'bottom',
                        duration: 3000,
                        cssClass: 'red-toast'
                    }).present();


                } else {
                    this.viewController.dismiss();
                }

                changingPasswordLoader.dismissAll();


            });
        });

    }
}

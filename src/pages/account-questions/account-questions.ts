import {Component, OnInit, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormControl, FormGroup, Validators} from "@angular/forms";

/**
 * Generated class for the AccountQuestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-account-questions',
    templateUrl: 'account-questions.html',
})
export class AccountQuestionsPage implements OnInit {

    @ViewChild(Content) content: Content;

    /* The phase of the account question process */
    public phase: number = 1;

    /* The account type that is currently selected */
    private accountType: string = "";

    petParentForm: FormGroup;

    constructor(public navCtrl: NavController, public navParams: NavParams) {


    }


    create() {

        Object.keys(this.petParentForm.controls).map((controlName) => {
            this.petParentForm.get(controlName).markAsTouched({onlySelf: true});
        });

        if (this.petParentForm.valid) {

        }
    }

    selectAccountType(accountType: string) {

        this.accountType = accountType;
        this.phase = 2;

    }


    ngOnInit(): void {

        this.petParentForm = new FormGroup({
            username:  new FormControl ('', [Validators.required]),
            address:  new FormControl ('', [Validators.required]),
            city: new FormControl('', [Validators.required]),
            state: new FormControl('', [Validators.required]),
            zip: new FormControl('', [Validators.required]),
        });


    }
}

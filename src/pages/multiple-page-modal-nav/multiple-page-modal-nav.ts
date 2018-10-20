import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {NavServiceProvider} from "../../providers/nav-service/nav-service";

/**
 * Generated class for the MultiplePageModalNavPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-multiple-page-modal-nav',
    templateUrl: 'multiple-page-modal-nav.html',
})
export class MultiplePageModalNavPage implements OnInit {

    root: any = null;

    params: any = {};

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public viewController: ViewController,
                public navService: NavServiceProvider) {
    }


    ngOnInit(): void {

        this.root = this.navParams.get('root');

        //Check to see if we have any parameters
        if (this.navParams.get('params') !== null && this.navParams.get('params') !== undefined) {
            this.params = this.navParams.get('params');
        }

        this.navService.setViewController(this.viewController);

    }


}

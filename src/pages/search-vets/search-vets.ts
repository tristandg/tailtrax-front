import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
import {Business} from "../../models/business";
import {BusinessService} from "../../services/businesses/business.service";

/**
 * Generated class for the SearchVetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-search-vets',
    templateUrl: 'search-vets.html',
})
export class SearchVetsPage {

    businesses: Business[] = [];

    search: string = "";

    searching: boolean = false;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public modalController: ModalController,
                public viewController: ViewController,
                public businessService: BusinessService) {
    }

    selectBusiness(business) {

        this.viewController.dismiss(business);
    }


    setupOrganization() {

        this.viewController.dismiss("setup");

    }


    onInput() {

        this.searching = true;

        if (this.search.trim() !== '' && this.search.trim().length > 1)
            this.businessService.search(this.search).then((businesses) => {
                this.businesses = businesses;
                this.searching = false;
            });
    }

}

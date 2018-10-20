import {Component, OnInit} from '@angular/core';
import {Keyboard, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {OnboardingPage} from "../pages/onboarding/onboarding";
import {Push} from "@ionic-native/push";
import {UsersService} from "../services/users/users.service";
import {MainAppPage} from "../pages/main/main-app/main-app";


//declare var TestFairy: any;

@Component({
    templateUrl: 'app.html'
})
export class MyApp implements OnInit {

//  rootPage:any = TabsPage;
    rootPage: any = OnboardingPage;


    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, keyboard: Keyboard, push: Push, userService: UsersService) {

        platform.ready().then(() => {

            //TestFairy.begin("1584d3b13fed2f631a0a5ac1a07d63c14886307d");

            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleLightContent();


        });
    }

    ngOnInit(): void {

        if (localStorage.getItem('tailtrax-token') != null) {

            this.rootPage = MainAppPage;

        }
    }
}

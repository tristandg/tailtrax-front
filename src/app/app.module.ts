import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {EmailConfirmationPageModule} from "../pages/email-confirmation/email-confirmation.module";
import {SignUpPageModule} from "../pages/signup/signup.module";
import {AccountQuestionsPageModule} from "../pages/account-questions/account-questions.module";
import {SignInPageModule} from "../pages/signin/signin.module";
import {MainAppPageModule} from "../pages/main/main-app/main-app.module";
import {UsersService} from "../services/users/users.service";
import {DirectivesModule} from "../directives/directives.module";
import {HttpModule} from "../services/http.module";
import {PetsService} from "../services/pets/pets.service";
import {PipesModule} from "../pipes/pipes.module";
import {UserProvider} from '../providers/user/user';
import {OnboardingPageModule} from "../pages/onboarding/onboarding.module";
import {Camera} from "@ionic-native/camera";
import {FileTransferObject} from "@ionic-native/file-transfer";
import {PawPostsPageModule} from "../pages/paw-posts/paw-posts.module";
import {MessagesPageModule} from "../pages/messages/messages.module";
import {StreamingMedia} from "@ionic-native/streaming-media";
import {LittersService} from "../services/litters/litters.service";
import {MultiplePageModalNavPageModule} from "../pages/multiple-page-modal-nav/multiple-page-modal-nav.module";
import {SettingsPageModule} from "../pages/settings/settings.module";
import {Push} from "@ionic-native/push";
import {Facebook} from "@ionic-native/facebook";
import {BusinessService} from "../services/businesses/business.service";
import {AlertService} from "../services/alert/alert.service";
import {ViewProfilePageModule} from "../pages/view-profile/view-profile.module";
import {FCM} from '@ionic-native/fcm';
import {FollowService} from "../services/follow/follow.service";
import {GooglePlus} from "@ionic-native/google-plus";


@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,

    ],
    imports: [
        DirectivesModule,
        PipesModule,
        BrowserModule,
        IonicModule.forRoot(MyApp),
        EmailConfirmationPageModule,
        AccountQuestionsPageModule,
        SignUpPageModule,
        SignInPageModule,
        MainAppPageModule,
        OnboardingPageModule,
        PawPostsPageModule,
        MessagesPageModule,
        SettingsPageModule,
        MultiplePageModalNavPageModule,
        HttpModule,
        ViewProfilePageModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        UsersService,
        UserProvider,
        PetsService,
        LittersService,
        Camera,
        FileTransferObject,
        StreamingMedia,
        Push,
        Facebook,
        GooglePlus,
        BusinessService,
        AlertService,
        FollowService,
        FCM


    ]
})

export class AppModule {


}

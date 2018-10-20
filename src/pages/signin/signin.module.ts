import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SignInPage} from "./signin";
import {DirectivesModule} from "../../directives/directives.module";
import {HttpModule} from "../../services/http.module";
import {UsersService} from "../../services/users/users.service";

@NgModule({
    declarations: [
        SignInPage,
    ],
    imports: [
        IonicPageModule.forChild(SignInPage),
        DirectivesModule,
        HttpModule
    ],
    providers: [
        UsersService
    ]
})
export class SignInPageModule {
}

import {NgModule} from '@angular/core';
import {GenderPipe} from './gender/gender';
import {BirthdayPipe} from "./birthday/gender";
import {TimeAgoPipe} from "time-ago-pipe";

@NgModule({
    declarations: [GenderPipe, BirthdayPipe, TimeAgoPipe],
    imports: [],
    exports: [GenderPipe, BirthdayPipe, TimeAgoPipe]
})
export class PipesModule {

}

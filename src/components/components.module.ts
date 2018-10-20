import {NgModule} from '@angular/core';
import {ViewDogs} from "./view-dogs/view-dogs";
import {ViewLitters} from "./view-litters/view-litters";
import {BrowserModule} from "@angular/platform-browser";
import {IonicModule} from "ionic-angular";
import {ViewLitterComponent} from './view-litter/view-litter';
import {ViewToolsComponent} from './view-tools/view-tools';

@NgModule({
    imports: [BrowserModule, IonicModule],
    declarations: [ViewDogs, ViewLitters,
        ViewLitterComponent,
        ViewToolsComponent],
    entryComponents: [ViewDogs, ViewLitters],
    exports: [ViewDogs, ViewLitters,
        ViewLitterComponent,
        ViewToolsComponent]
})
export class ComponentsModule {
}

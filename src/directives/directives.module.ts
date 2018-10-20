import {NgModule} from '@angular/core';
import {FormErrorDirective} from './form-error/form-error';
import {EnterDirective} from "./form-error/enter";
import {NextInputDirective} from "./form-error/nextInput";
import {Autosize} from "./autosize.directive";

@NgModule({
    declarations: [FormErrorDirective, EnterDirective, NextInputDirective, Autosize],
    imports: [],
    exports: [FormErrorDirective, EnterDirective, NextInputDirective, Autosize]
})
export class DirectivesModule {
}

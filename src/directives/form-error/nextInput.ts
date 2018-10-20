///<reference path="../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
import {Directive, ElementRef, Input, OnDestroy, OnInit, Renderer} from '@angular/core';
import {Keyboard} from "ionic-angular";

/**
 * Generated class for the FormErrorDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
    selector: '[nextInput]' // Attribute selector
})
export class NextInputDirective implements OnDestroy, OnInit {

    @Input('nextInput') inputToFocus: any;


    constructor(public el: ElementRef, public keyboard: Keyboard, private renderer: Renderer) {

    }

    ngOnDestroy(): void {


    }

    ngOnInit(): void {

        this.el.nativeElement.onkeydown = (event) => {

            if (event.key === 'Enter') {

                console.log(this.inputToFocus);

                this.inputToFocus.setFocus();
            }
        };

    }


}

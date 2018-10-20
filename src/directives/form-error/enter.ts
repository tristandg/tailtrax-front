///<reference path="../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
import {Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Keyboard} from "ionic-angular";

/**
 * Generated class for the FormErrorDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
    selector: '[enterClose]' // Attribute selector
})
export class EnterDirective implements OnDestroy, OnInit {

    @Output('onEnter') childFunc: EventEmitter<any> = new EventEmitter();

    constructor(public el: ElementRef, public keyboard: Keyboard) {

    }

    ngOnDestroy(): void {


    }

    ngOnInit(): void {

        this.el.nativeElement.onkeydown = (event) => {
            if (event.key === 'Enter') {
                this.keyboard.close();
                this.childFunc.emit();
            }
        };

    }


}

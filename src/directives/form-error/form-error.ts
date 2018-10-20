///<reference path="../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
import {Directive, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl} from "@angular/forms";
import {Subject} from "rxjs/Subject";

/**
 * Generated class for the FormErrorDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
    selector: '[formError]' // Attribute selector
})
export class FormErrorDirective implements OnDestroy, OnInit {

    @Input() formError: AbstractControl;

    destroy$: Subject<boolean> = new Subject<boolean>();


    constructor(public el: ElementRef) {


    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
        // Now let's also unsubscribe from the subject itself:
        this.destroy$.unsubscribe();
    }

    ngOnInit(): void {
        this.formError.statusChanges.takeUntil(this.destroy$).subscribe(() => {
            if (this.formError.valid) {
                this.el.nativeElement.classList.remove('invalid-form');
            } else {
                this.el.nativeElement.classList.add('invalid-form');
            }
        });
    }
}

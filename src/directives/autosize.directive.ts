import {Directive, ElementRef, HostListener, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Directive({
    selector: 'ion-textarea[autosize]'
})

export class Autosize implements OnInit, OnChanges {
    @HostListener('input', ['$event'])
    @HostListener('focus', ['$event'])
    @HostListener('change', ['$event'])

    onEvent() {
        this.adjust();
    }

    constructor(public element: ElementRef) {
    }

    ngOnInit(): void {
        setTimeout(() => this.adjust(), 0);
    }

    adjust(): void {
        const textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
        textArea.style.overflow = 'hidden';
        textArea.style.height = 'auto';
        textArea.style.height = textArea.scrollHeight + 'px';

        if ((textArea.scrollHeight) >= 55) {

            if ((10 + textArea.scrollHeight) < 400) {
                document.getElementById('message-box').style.height = (10 + textArea.scrollHeight) + 'px';
            }
        } else {
            document.getElementById('message-box').style.height = 60 + 'px';

        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.adjust();
    }
}
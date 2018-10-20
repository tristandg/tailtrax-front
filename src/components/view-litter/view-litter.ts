import {Component, Input, OnInit} from '@angular/core';
import {LittersService} from "../../services/litters/litters.service";
import {Pet} from "../../models/Pet";
import {Litter} from "../../models/Litter";

/**
 * Generated class for the ViewLitterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'view-litter',
    templateUrl: 'view-litter.html'
})
export class ViewLitterComponent implements OnInit {


    @Input('dog') public dog: Pet;

    litter: Litter = null;


    constructor(public litterService: LittersService) {


    }

    ngOnInit(): void {

        this.litterService.getLitterForPet(this.dog.id).then((litters) => {

            if (litters.length !== 0) {
                console.log(litters);
                this.litter = litters[0];
            }
        });
    }

}

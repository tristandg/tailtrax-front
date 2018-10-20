import {Pipe, PipeTransform} from '@angular/core';

/**
 * Generated class for the GenderPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
    name: 'gender',
})
export class GenderPipe implements PipeTransform {
    /**
     * Takes a value and makes it lowercase.
     */
    transform(value: string, ...args) {
        if (parseInt(value) === 0) {
            return "Male";
        } else {
            return "Female";
        }
    }
}

import {Pipe, PipeTransform} from '@angular/core';
import * as moment from "moment";

/**
 * Generated class for the GenderPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
    name: 'birthday',
})
export class BirthdayPipe implements PipeTransform {
    /**
     * Takes a value and makes it lowercase.
     */
    transform(value: string, ...args) {

        return moment(value).format("LL");
    }
}

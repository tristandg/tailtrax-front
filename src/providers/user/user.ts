import {Injectable} from '@angular/core';
import {User} from "../../models/User";

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {


    constructor() {

    }


    private user: User = null;

    /**
     * Set the currently authenticated user
     * @param user
     */
    public setUser(user) {

        window.localStorage.setItem('user', JSON.stringify(user));

        this.user = user;
    }

    /**
     * Get the currently authenticated user
     * @returns {User}
     */
    public getUser(): User {

        if (this.user === null) {
            return this.user = JSON.parse(window.localStorage.getItem('user'));

        }
        return this.user;
    }

    /**
     * Check to see if the user is a pet parent
     * @returns {boolean}
     */
    public isPetParent() {

        return this.getUser().role === 'pet_parent';

    }

    /**
     * Check to see if the user is a vet
     * @returns {boolean}
     */
    public isVet() {

        return this.getUser().role === 'vet';

    }

    /**
     * Check to see if the user is a breeder
     * @returns {boolean}
     */
    public isBreeder() {

        return this.getUser().role === 'litter_administrator';

    }
}

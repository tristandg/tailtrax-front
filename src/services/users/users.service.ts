import {Injectable} from '@angular/core';
import {HttpService} from '../http-service';
import {User} from '../../models/User';
import {Pet} from '../../models/Pet';

@Injectable()
export class UsersService {

    constructor(private http: HttpService) {
    }


    getUsersByRole(role: string): Promise<User[]> {

        return this.http.post('users/users-by-role', {role: role})
            .toPromise()
            .then(res => res)
            .catch(this.handleError);
    }
    

    login(user: User): Promise<User> {
        return this.http.post('users/signin', JSON.stringify(user))
            .toPromise()
            .then(res => res)
            .catch(this.handleError);
    }

    loginFacebook(facebookAccessToken: string): Promise<any> {
        return this.http.post('social_login/facebook', {access_token: facebookAccessToken})
            .toPromise()
            .then(res => res)
            .catch(this.handleError);
    }

    loginGoogle(facebookAccessToken: string): Promise<any> {
        return this.http.post('social_login/google', {access_token: facebookAccessToken})
            .toPromise()
            .then(res => res)
            .catch(this.handleError);
    }


    search(search: any): Promise<User[]> {
        return this.http.post('users/search', JSON.stringify({
            search: search

        }))
            .toPromise()
            .then(res => res)
            .catch(this.handleError);
    }


    updateToken(push_token: any, device: string): Promise<User[]> {
        return this.http.post('users/update_token', JSON.stringify({
            push_token: push_token,
            push_token_type: device

        }))
            .toPromise()
            .then(res => res)
            .catch(this.handleError);
    }


    changePassword(old_password: string, new_password: string): Promise<boolean> {
        return this.http.post('users/changePassword', JSON.stringify({
            old_password: old_password,
            new_password: new_password,

        }))
            .toPromise()
            .then(res => res)
            .catch(this.handleError);
    }

    getUsersName(email: string): Promise<string> {

        return this.http.post('users/get_users_name', {email: email})
            .toPromise()
            .catch(this.handleError);

    }


    // Gets all Users
    getAll(): Promise<User[]> {
        return this.http.get('users/all')
            .toPromise()
            .catch(this.handleError);
    }

    // Gets the current User
    getUser(): Promise<User> {
        return this.http.get('users')
            .toPromise()
            .catch(this.handleError);
    }

    getSpecificUser(id: number): Promise<Pet> {
        const url = `users/${id}`;
        return this.http.get(url)
            .toPromise()
            .catch(this.handleError);
    }

    update(user: User): Promise<User> {
        console.log(user);
        return this.http.put('users/update/' + user.id.toString(), JSON.stringify(user))
            .toPromise()
            .catch(this.handleError);
    }

    updateSpecificUser(user: User) {
        return this.http.put(`users/update/${user.id}`, JSON.stringify(user)).toPromise().catch(this.handleError);
    }

    delete(id: number): Promise<User> {
        return this.http.delete('users/delete/' + id.toString())
            .toPromise()
            .catch(this.handleError);
    }

    signup(user: User): Promise<User> {
        console.log(JSON.stringify(user));
        return this.http.post('users/signup', JSON.stringify(user))
            .toPromise()
            .catch(this.handleError);
    }

    forgotpassword(user: User): Promise<any> {
        return this.http.post('users/forgot_password', JSON.stringify(user))
            .toPromise()
            .catch(this.handleError);
    }

    changepassword(user: User): Promise<User> {
        return this.http.post('users/change_password', JSON.stringify(user))
            .toPromise()
            .catch(this.handleError);
    }

    forgotpassword_token(user: User): Promise<any> {
        return this.http.post('users/forgot_password_token', JSON.stringify(user))
            .toPromise()
            .catch(this.handleError);
    }

    /*
     * This service is used for admins, standard signs up should use: signup
     */
    create(user: User): Promise<User> {
        return this.http.post('users/create_user', JSON.stringify(user))
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {

        return Promise.reject(error.message || error);
    }

}

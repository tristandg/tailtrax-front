import {EventEmitter, Injectable} from '@angular/core';
import {HttpService} from '../http-service';
import {Group} from '../../models/group';
import {Notification} from '../../models/notification';
import {User} from '../../models/User';

@Injectable()
export class GroupService {

    groupsUrl = 'groups'; // entry point

    constructor(private http: HttpService) {
    }

    private groupAdded: EventEmitter<Group> = new EventEmitter<Group>();

    public groupAddedEvent(): EventEmitter<Group> {

        return this.groupAdded;
    }

    create(group: Group): Promise<Group> {

        return this.http.post(`${this.groupsUrl}`, JSON.stringify(group)).toPromise().then(groupCreated => {
            this.groupAdded.emit(groupCreated);
            return groupCreated;
        }).catch(this.handleError);
    }


    update(group: Group) {
        return this.http.put(`${this.groupsUrl}/${group.id}`, JSON.stringify(group)).toPromise().catch(this.handleError);
    }

    invite(group: Group, users: User[]): Promise<boolean> {

        return this.http.post(`${this.groupsUrl}/invite_users/${group.id}`, JSON.stringify({users})).toPromise().catch(this.handleError);

    }

    removeUserFromGroup(group: Group, user: User) {

        return this.http.post(`${this.groupsUrl}/members/remove/${group.id}`, JSON.stringify({user_id: user.id})).toPromise().catch(this.handleError);
    }

    get(id: number): Promise<Group> {

        return this.http.get(`${this.groupsUrl}/${id}`).toPromise().catch(this.handleError);
    }

    getGroupMembers(id: number): Promise<Group> {

        return this.http.get(`${this.groupsUrl}/members/${id}`).toPromise().catch(this.handleError);

    }

    getUserGroups(): Promise<Group[]> {

        return this.http.get(`${this.groupsUrl}/my-groups`).toPromise()
            .catch(this.handleError);
    }

    getPublicGroups(): Promise<Group[]> {

        return this.http.get(`${this.groupsUrl}`).toPromise()
            .catch(this.handleError);
    }

    acceptInvite(notification: Notification): Promise<boolean> {
        const url = `${this.groupsUrl}/accept_invite/${notification.id}`;

        return this.http
            .post(url, JSON.stringify(''))
            .toPromise()
            .catch(this.handleError);
    }

    declineInvite(notification: Notification): Promise<boolean> {
        const url = `${this.groupsUrl}/decline_invite/${notification.id}`;

        return this.http
            .post(url, JSON.stringify(''))
            .toPromise()
            .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}

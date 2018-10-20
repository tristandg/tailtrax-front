import {Injectable} from '@angular/core';
import {HttpService} from '../http-service';
import {Alert} from "../../models/alert";
import moment from "moment"


@Injectable()
export class AlertService {

    alertsUrl = 'alerts'; // entry point


    constructor(private http: HttpService) {

    }


    getAll(): Promise<Alert[]> {

        return this.http.get(`${this.alertsUrl}/get-alerts-sent-to-me`).toPromise().then((alerts) => alerts).catch(this.handleError);
    }


    create(affectedPets: number[], affectedLitters: number[], content: string, urgent: boolean): Promise<Alert[]> {
        return this.http.post(`${this.alertsUrl}/schedule-alert`, {
            affected_pets: affectedPets,
            affectedLitters: affectedLitters,
            content: content,
            date_to_send: moment().toDate().toUTCString(),
            category: urgent
        }).toPromise().then((alerts) => alerts).catch(this.handleError);
    }


    delete(alert_id: number): Promise<Alert[]> {
        return this.http.post(`${this.alertsUrl}/remove-alert-for-user`, {
            alert_id: alert_id
        }).toPromise().then((alerts) => alerts).catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}

import {Injectable} from '@angular/core';
import {HttpService} from '../http-service';
import {Notification} from '../../models/notification';

@Injectable()
export class NotificationsService {
  getAllNotificationsUrl = 'notifications/getAll';
  notificationUrl = 'notifications';
  constructor(private http: HttpService) { }
// Get all
  getAllNotifications(): Promise<Notification[]> {
    return this.http.get(this.getAllNotificationsUrl)
      .toPromise()
      .catch(this.handleError);
  }

  getMyNotifications(): Promise<Notification[]> {
    return this.http.get(this.notificationUrl)
      .toPromise()
      .catch(this.handleError);
  }
// Create Notification
  create(notification: Notification): Promise<Notification> {
    return this.http.post(this.notificationUrl, JSON.stringify(notification))
      .toPromise()
      .catch(this.handleError);
  }

  clearNotification(notification: Notification): Promise<boolean> {
    const url = `${this.notificationUrl}/archive`;
    return this.http.post(url, JSON.stringify({notifications: [notification]}))
      .toPromise()
      .catch(this.handleError);
  }

  clearNotifications(notifications: Notification[]): Promise<boolean> {
    const url = `${this.notificationUrl}/archive`;
    return this.http.post(url, JSON.stringify({notifications}))
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

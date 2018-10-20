import {Injectable} from '@angular/core';
import {HttpService} from '../http-service';
import {Follow} from '../../models/follow';

@Injectable()
export class FriendService {
  followUrl = 'friends';

  constructor(private http: HttpService) { }

  // Get all user follows
  getUserFollows(): Promise<Follow[]> {
    const url = `users/follows`;
    return this.http.get(url)
      .toPromise()
      .catch(this.handleError);
  }

  // Create a new user follow
  create(follow: Follow): Promise<Follow> {
    const url = `users/follow/${follow.follow_id}`;

    return this.http.post(url, '')
      .toPromise()
      .catch(this.handleError);
  }

  delete(follow: Follow): Promise<boolean> {
    const url = `users/unfollow/${follow.id}`;
    return this.http.post(url, '')
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

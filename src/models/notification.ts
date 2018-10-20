import {User} from './User';


export class Notification {
  id?: number;
  notification_type?: string;
  message?: string;
  url?: string;
  created_at?: Date;
  user?: User;
}

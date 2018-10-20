import {User} from './User';


export class Alert {
    sender_user_id?: number;
    id: number;
    date_to_send: string;
    category: string;
    content: string;
    user: User;
    users: User[] = [];
}

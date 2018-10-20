import {Message} from './Message';
import {User} from './User';

export class Conversation {
  id?: number;
  users?: User[];
  created_at?: Date;
  updated_at?: Date;
  direct_messages?: Message[];

  constructor() {
    this.direct_messages = [];
    this.users = [];
  }
}

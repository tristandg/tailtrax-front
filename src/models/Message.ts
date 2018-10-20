import {User} from './User';

export class Message {
  id: number;
  user_id: number;
  user_id_from: number;
  user_id_to: number;
  conversation_id: number;
  content: string;
  direct_message_type: number;
  media?: string;
  media_type?: number;
  created_at: Date;
  updated_at: Date;
  user?: User;

  constructor() {

  }
}

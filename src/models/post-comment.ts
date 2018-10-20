import {User} from './User';

export class PostComment {
  id?: number;
  user?: User;
  content?: string;
  title?: string;
  media?: string;
  media_type?: number;
  post_id?: number;
  social_comment_type?: number;

  constructor() {

  }
}

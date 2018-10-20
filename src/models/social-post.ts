import {PostComment} from './post-comment';
import {User} from './User';
import {SocialLike} from './social-like';

export class SocialPost {
  id?: number;
  group_id?: number;
  content?: string;
  title?: string;
  media?: string;
  media_type?: number;
  social_comments?: PostComment[];
  social_likes?: SocialLike[];
  social_post_type?: number;
  created_at?: Date;
  user?: User;
  constructor() {
    this.social_comments = [];
    this.social_likes = [];
  }
}

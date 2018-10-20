import {SocialPost} from './social-post';
import {User} from './User';

export class SocialLike {
  id?: number;
  social_post?: SocialPost;
  user?: User;
  social_like_type?: number;
}

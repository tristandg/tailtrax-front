export class Follow {
  id?: number;
  user_id?: number;
  follow_id?: number;
  follow_type?: FollowType;
}

enum FollowType {
  user_follow = 0,
  group_follow = 1
}

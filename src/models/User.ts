import {BusinessHour} from './business';

export class User {
  id?: number;
  authentication_token?: string;
  token_expires?: Date;
  email?: string;
  created_at?: Date;
  updated_at?: Date;
  role?: string;
  admin?: boolean;
  first_name?: string;
  last_name?: string;
  phone?: string;
  location?: string;
  is_minor?: boolean;
  parent_email?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: number;
  website?: string;
  profile_image?: string;
  background_image?: string;
  bio?: string;
  id_name?: string;
  bone_points?: number;

  business_name?: string;
  business_id?: number;
  business_address?: string;
  business_profile_image?: string;
  business_city?: string;
  business_phone?: string;
  business_zip?: string;
  business_state?: string;
  business_email?: string;
  business_license?: string;
  business_hours?: BusinessHour[];

  /**
   * Optional / Registration / Login
   */
  username?: string;
  password?: string;

  // TODO: Should be switch case
  public static roleToNumber(user: User): number {
    if (user.role === 'user') {
      return 0;
    } else if (user.role === 'pet_parent') {
      return 1;
    } else if (user.role === 'litter_administrator') {
      return 2;
    } else if (user.role === 'vet') {
      return 3;
    } else if (user.role === 'admin') {
      return 4;
    } else if (user.role === 'super_admin') {
      return 5;
    }
  }
}

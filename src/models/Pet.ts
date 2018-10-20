import {User} from './User';
import {Litter} from './Litter';
import {PetBreed} from './pet-breed';
import {PetColor} from './pet-color';
import {PetMarkings} from './pet-markings';
import {Business} from './business';

export class Pet {
  id?: number;
  name?: string;
  birthday?: Date;
  gender?: number;
  weight?: number;
  pet_description?: string;
  breed_id?: number;
  color?: number;
  markings?: string;
  microchip?: string;
  location?: string;
  akc_reg_number?: string;
  akc_reg_date?: Date;
  food: string;
  supplemental: string;
  health_issue: string;
  owner?: User;
  pet_profile_pic?: string;
  background_pic?: string;
  pet_breed?: PetBreed;
  pet_color?: PetColor;
  pet_markings?: PetMarkings;
  breed?: string;
  litters?: Litter[];
  vets?: Business[];
  background_image?: string;
}

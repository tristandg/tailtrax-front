import {Pet} from './Pet';

export class Litter {
  id?: number;
  name?: string;
  litter_description?: string;
  pet_mom_id?: number;
  pet_mom?: Pet;
  pet_dad_id?: number;
  pet_dad?: Pet;
  birthday?: Date;
  pets?: Pet[];
}

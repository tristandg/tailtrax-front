import {Pet} from './Pet';

export class Record {
  id?: number;
  condition_notes: string;
  severity_override?: number;
  vet_id?: number;
  user_id?: number;
  condition?: string;
  created_at: Date;
  updated_at: Date;
  pet: Pet;
  medications: string;
}


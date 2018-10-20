import {Medication} from './medication';
import {Vaccine} from './vaccine';
import {Diagnosis} from './diagnosis';
import {Reminder} from './reminder';
import {Business} from './business';

export class PetHealthRecord {
  id?: number;
  condition_notes?: string;
  vet_id?: number;
  pet_id?: number;
  medication_id?: number;
  vaccine_id?: number;
  diagnosis_id?: number;
  medication?: Medication;
  vaccine?: Vaccine;
  diagnosis?: Diagnosis;
  check_in_date?: Date;
  reminders?: Reminder[];
  vet?: Business;

  constructor() {
    this.reminders = [];
  }
}

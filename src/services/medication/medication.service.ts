import {Injectable} from '@angular/core';
import {HttpService} from '../http-service';
import {Medication} from '../../models/medication';

@Injectable()
export class MedicationService {
  medicationUrl = 'medications';

  constructor(private http: HttpService) { }

  getMedications(): Promise<Medication[]> {
    const url = `${this.medicationUrl}/all`;
    return this.http.get(url)
      .toPromise()
      .catch(this.handleError);
  }

  getMedication(id: number): Promise<Medication> {
    const url = `${this.medicationUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .catch(this.handleError);
  }

  create(medication: Medication): Promise<Medication> {
    return this.http.post(this.medicationUrl, JSON.stringify(medication))
      .toPromise()
      .catch(this.handleError);
  }

  delete(medication: Medication): Promise<boolean> {
    const url = `${this.medicationUrl}/${medication.id}`;
    return this.http.delete(url)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

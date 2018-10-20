import {Injectable} from '@angular/core';
import {HttpService} from '../http-service';
import {PetHealthRecord} from '../../models/pet-health-record';


@Injectable()
export class HealthRecordsService {
  url = 'pet_health_records';

  constructor(private http: HttpService) {}

  // Get all health records
  getAll(): Promise<PetHealthRecord[]> {
    return this.http.get(this.url + '/getAll')
      .toPromise()
      .catch(this.handleError);
  }

  // Get all health records belonging to specific pet
  getPetRecords(id: number): Promise<PetHealthRecord[]> {
    const url = `${this.url}/${id}`;
    return this.http.get(url)
      .toPromise()
      .catch(this.handleError);
  }

  // Get all health records for logged-in user
  getUserRecords(): Promise<PetHealthRecord[]> {
    return this.http.get(this.url + '/')
      .toPromise()
      .catch(this.handleError);
  }

  // Create a health record
  createHealthRecord(petHealthRecord: PetHealthRecord): Promise<PetHealthRecord> {
    return this.http.post(this.url, JSON.stringify(petHealthRecord))
      .toPromise()
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}

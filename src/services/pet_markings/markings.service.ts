import {Injectable} from '@angular/core';
import {HttpService} from '../http-service';
import {PetMarkings} from '../../models/pet-markings';

@Injectable()
export class MarkingsService {

  markingsUrl = 'pet_markings'; // entry point
  getAllMarkingsUrl = 'pet_markings/getAll';

  constructor(private http: HttpService) { }

  createMarkings(markings: PetMarkings): Promise<PetMarkings> {
    return this.http.post(this.markingsUrl, JSON.stringify(markings))
      .toPromise()
      .catch(this.handleError);
  }

  getAllMarkings(): Promise<PetMarkings[]> {
    return this.http.get(this.getAllMarkingsUrl)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

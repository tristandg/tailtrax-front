import {Injectable} from '@angular/core';
import {HttpService} from '../http-service';
import {PetBreed} from '../../models/pet-breed';

@Injectable()
export class BreedService {

  breedUrl = 'pet_breeds';
  getAllBreedsUrl = 'pet_breeds/getAll';

  constructor(private http: HttpService) { }

  createBreed(breed: PetBreed): Promise<PetBreed> {
    return this.http.post(this.breedUrl, JSON.stringify(breed))
      .toPromise()
      .catch(this.handleError);
  }

  getAllBreeds(): Promise<PetBreed[]> {
    return this.http.get(this.getAllBreedsUrl)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

import {Injectable} from '@angular/core';
import {HttpService} from '../http-service';
import {PetColor} from '../../models/pet-color';

@Injectable()
export class ColorService {

  colorUrl = 'pet_colors'; // entry point
  getAllColorsUrl = 'pet_colors/getAll';

  constructor(private http: HttpService) { }

  createColor(color: PetColor): Promise<PetColor> {
    return this.http.post(this.colorUrl, JSON.stringify(color))
      .toPromise()
      .catch(this.handleError);
  }

  getAllColors(): Promise<PetColor[]> {
    return this.http.get(this.getAllColorsUrl)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

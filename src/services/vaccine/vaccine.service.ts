import {Injectable} from '@angular/core';
import {HttpService} from '../http-service';
import {Vaccine} from '../../models/vaccine';

@Injectable()
export class VaccineService {
  vaccineUrl = 'vaccines';

  constructor(private http: HttpService) { }

  getVaccines(): Promise<Vaccine[]> {
    const url = `${this.vaccineUrl}/all`;
    return this.http.get(url)
      .toPromise()
      .catch(this.handleError);
  }

  getVaccine(id: number): Promise<Vaccine> {
    const url = `${this.vaccineUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .catch(this.handleError);
  }

  create(vaccine: Vaccine): Promise<Vaccine> {
    return this.http.post(this.vaccineUrl, JSON.stringify(vaccine))
      .toPromise()
      .catch(this.handleError);
  }

  delete(vaccine: Vaccine): Promise<boolean> {
    const url = `${this.vaccineUrl}/${vaccine.id}`;
    return this.http.delete(url)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

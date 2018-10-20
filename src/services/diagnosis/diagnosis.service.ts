import {Injectable} from '@angular/core';
import {HttpService} from '../http-service';
import {Diagnosis} from '../../models/diagnosis';

@Injectable()
export class DiagnosisService {
  diagnosisUrl = 'diagnoses';

  constructor(private http: HttpService) { }

  getDiagnoses(): Promise<Diagnosis[]> {
    const url = `${this.diagnosisUrl}/all`;
    return this.http.get(url)
      .toPromise()
      .catch(this.handleError);
  }

  getDiagnosis(id: number): Promise<Diagnosis> {
    const url = `${this.diagnosisUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .catch(this.handleError);
  }

  create(diagnosis: Diagnosis): Promise<Diagnosis> {
    return this.http.post(this.diagnosisUrl, JSON.stringify(diagnosis))
      .toPromise()
      .catch(this.handleError);
  }

  delete(diagnosis: Diagnosis): Promise<boolean> {
    const url = `${this.diagnosisUrl}/${diagnosis.id}`;
    return this.http.delete(url)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

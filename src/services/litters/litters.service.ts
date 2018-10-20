import {Injectable} from '@angular/core';
import {HttpService} from '../http-service';
import {Litter} from '../../models/Litter';


@Injectable()
export class LittersService {

    littersUrl = 'litters'; // entry point

    constructor(private http: HttpService) {
    }

    create(litter: Litter): Promise<Litter> {
        return this.http.post(this.littersUrl, JSON.stringify(litter))
            .toPromise()
            .catch(this.handleError);
    }

    update(litter: Litter): Promise<Litter> {
        return this.http.put(this.littersUrl + '/' + litter.id.toString(), JSON.stringify(litter))
            .toPromise()
            .catch(this.handleError);
    }

    getLitter(id: number): Promise<Litter> {
        const url = `${this.littersUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .catch(this.handleError);
    }

    getLitterForPet(id: number): Promise<Litter[]> {
        const url = `${this.littersUrl}/pet/${id}`;
        return this.http.get(url)
            .toPromise()
            .catch(this.handleError);
    }


    getAllLitters(): Promise<Litter[]> {
        return this.http.get('litters/all')
            .toPromise()
            .catch(this.handleError);
    }

    getLitters(): Promise<Litter[]> {
        return this.http.get(this.littersUrl)
            .toPromise()
            .catch(this.handleError);
    }

    deleteLitter(id: number): Promise<Boolean> {
        const url = `${this.littersUrl}/${id}`;
        return this.http.delete(url)
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}

import {Injectable} from '@angular/core';
import {HttpService} from './http-service';
import {PetTransfer} from '../models/pet-transfer';
import {Pet} from '../models/Pet';

@Injectable()
export class PetTransferService {

    businessesUrl = 'pet_transfers'; // entry point

    constructor(private http: HttpService) {
    }

    create(user_id: number, pet_id: number): Promise<PetTransfer> {
        return this.http.post(`${this.businessesUrl}`, JSON.stringify({user_id, pet_id})).toPromise().catch(this.handleError);
    }

    get(): Promise<PetTransfer[]> {
        return this.http.get(`${this.businessesUrl}/my-transfers`).toPromise().catch(this.handleError);
    }

    accept(transfer: PetTransfer): Promise<Pet> {
        return this.http.post(`${this.businessesUrl}/accept/${transfer.id}`, JSON.stringify({})).toPromise().catch(this.handleError);
    }

    decline(transfer: PetTransfer): Promise<void> {
        return this.http.post(`${this.businessesUrl}/decline/${transfer.id}`, JSON.stringify({})).toPromise().catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}

import {EventEmitter, Injectable} from '@angular/core';
import {HttpService} from '../http-service';
import {Business} from '../../models/business';
import {Pet} from "../../models/Pet";


@Injectable()
export class BusinessService {

    businessesUrl = 'businesses'; // entry point

    businessPets = 'businesses_pets'; // entry point

    private pageAdded: EventEmitter<Business> = new EventEmitter<Business>();

    public pageAddedEvent(): EventEmitter<Business> {

        return this.pageAdded;
    }

    constructor(private http: HttpService) {
    }


    getPetsForVet(): Promise<Pet[]> {

        return this.http.get(`${this.businessPets}/vets-pets`).toPromise().catch(this.handleError);

    }


    addPetToVet(pet_id: number): Promise<Pet> {

        return this.http.post(`${this.businessPets}/vets-pets`, {pet_id: pet_id}).toPromise().catch(this.handleError);

    }

    addUser(id: string): Promise<Business> {
        return this.http.post(`${this.businessesUrl}/addUser/${id}`, {}).toPromise().then((newBusiness) => {
            this.pageAdded.emit(newBusiness);
            return newBusiness;
        }).catch(this.handleError);
    }

    create(business: Business): Promise<Business> {
        return this.http.post(`${this.businessesUrl}`, JSON.stringify(business)).toPromise().then((newBusiness) => {
            this.pageAdded.emit(newBusiness);
            return newBusiness;
        }).catch(this.handleError);
    }

    search(search: string): Promise<Business[]> {
        return this.http.post(`${this.businessesUrl}/search`, JSON.stringify({search})).toPromise().then((newBusiness) => {
            this.pageAdded.emit(newBusiness);
            return newBusiness;
        }).catch(this.handleError);
    }


    createVet(business: Business): Promise<Business> {
        return this.http.post(`${this.businessesUrl}/vet`, JSON.stringify(business)).toPromise().then((newBusiness) => {
            this.pageAdded.emit(newBusiness);
            return newBusiness;
        }).catch(this.handleError);
    }

    get(): Promise<Business[]> {
        return this.http.get(`${this.businessesUrl}/my-businesses`).toPromise().catch(this.handleError);
    }

    getUserBusinesses(id: number): Promise<Business[]> {
        return this.http.get(`${this.businessesUrl}/user-businesses/${id}`).toPromise().catch(this.handleError);
    }

    getAllVetPages(): Promise<Business[]> {
        return this.http.get(`${this.businessesUrl}/vet`).toPromise().catch(this.handleError);
    }

    getAllLitterAdminPages(): Promise<Business[]> {
        return this.http.get(`${this.businessesUrl}/litter_admin`).toPromise().catch(this.handleError);
    }

    update(business: Business) {
        return this.http.put(`${this.businessesUrl}/${business.id}`, JSON.stringify(business)).toPromise().catch(this.handleError);
    }

    getBusiness(id: number): Promise<Business> {

        return this.http.get(`${this.businessesUrl}/${id}`).toPromise().catch(this.handleError);

    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}

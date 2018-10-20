import {Injectable} from '@angular/core';
import {HttpService} from '../http-service';
import {Pet} from '../../models/Pet';
import {Business} from '../../models/business';

@Injectable()
export class PetsService {

    petUrl = 'pets'; // entry point
    getAllPetsUrl = 'pets/getAll';

    constructor(private http: HttpService) {
    }

    create(pet: Pet): Promise<Pet> {
        return this.http.post(this.petUrl, JSON.stringify(pet))
            .toPromise()
            .catch(this.handleError);
    }

    update(pet: Pet): Promise<Pet> {
        return this.http.put(this.petUrl + '/' + pet.id.toString(), JSON.stringify(pet))
            .toPromise()
            .catch(this.handleError);
    }

    deletePet(id: number): Promise<void> {
        return this.http.delete(this.petUrl + '/' + id.toString())
            .toPromise()
            .catch(this.handleError);
    }

    getPetForUser(id: number): Promise<Pet[]> {
        const url = `${this.petUrl}/user/${id}`;
        return this.http.get(url)
            .toPromise()
            .catch(this.handleError);
    }

    getPet(id: number): Promise<Pet> {
        const url = `${this.petUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .catch(this.handleError);
    }

    getPets(): Promise<Pet[]> {
        return this.http.get(this.petUrl)
            .toPromise()
            .catch(this.handleError);
    }

    getAllPets(): Promise<Pet[]> {
        return this.http.get(this.getAllPetsUrl)
            .toPromise()
            .catch(this.handleError);
    }

    addVet(vet: Business, pet_id: number): Promise<Business> {
        return this.http.post(`pets/addVet/${pet_id}`, JSON.stringify({vet_id: vet.id}))
            .toPromise()
            .catch(this.handleError);
    }

    removeVet(vet: Business, pet_id: number): Promise<boolean> {
        return this.http.post(`pets/removeVet/${pet_id}`, JSON.stringify({vet_id: vet.id}))
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}

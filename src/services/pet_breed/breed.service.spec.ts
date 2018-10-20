import {inject, TestBed} from '@angular/core/testing';

import {BreedService} from './breed.service';

describe('BreedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BreedService]
    });
  });

  it('should be created', inject([BreedService], (service: BreedService) => {
    expect(service).toBeTruthy();
  }));
});

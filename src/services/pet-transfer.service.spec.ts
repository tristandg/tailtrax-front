import {inject, TestBed} from '@angular/core/testing';

import {PetTransferService} from './pet-transfer.service';

describe('PetTransferService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PetTransferService]
    });
  });

  it('should be created', inject([PetTransferService], (service: PetTransferService) => {
    expect(service).toBeTruthy();
  }));
});

import {inject, TestBed} from '@angular/core/testing';

import {VaccineService} from './vaccine.service';

describe('VaccineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VaccineService]
    });
  });

  it('should be created', inject([VaccineService], (service: VaccineService) => {
    expect(service).toBeTruthy();
  }));
});

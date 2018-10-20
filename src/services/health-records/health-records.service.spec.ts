import {inject, TestBed} from '@angular/core/testing';

import {HealthRecordsService} from './health-records.service';

describe('HealthRecordsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HealthRecordsService]
    });
  });

  it('should be created', inject([HealthRecordsService], (service: HealthRecordsService) => {
    expect(service).toBeTruthy();
  }));
});

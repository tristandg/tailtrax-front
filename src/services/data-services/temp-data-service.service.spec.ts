import {inject, TestBed} from '@angular/core/testing';

import {TempDataServiceService} from './temp-data-service.service';

describe('TempDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TempDataServiceService]
    });
  });

  it('should be created', inject([TempDataServiceService], (service: TempDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});

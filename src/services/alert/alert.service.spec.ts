import {inject, TestBed} from '@angular/core/testing';

import {AlertService} from './business.service';

describe('BusinessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertService]
    });
  });

  it('should be created', inject([AlertService], (service: AlertService) => {
    expect(service).toBeTruthy();
  }));
});

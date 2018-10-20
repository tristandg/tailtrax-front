import {inject, TestBed} from '@angular/core/testing';

import {MarkingsService} from './markings.service';

describe('MarkingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarkingsService]
    });
  });

  it('should be created', inject([MarkingsService], (service: MarkingsService) => {
    expect(service).toBeTruthy();
  }));
});

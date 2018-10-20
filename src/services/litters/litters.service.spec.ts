import {inject, TestBed} from '@angular/core/testing';

import {LittersService} from './litters.service';

describe('LittersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LittersService]
    });
  });

  it('should be created', inject([LittersService], (service: LittersService) => {
    expect(service).toBeTruthy();
  }));
});

import {inject, TestBed} from '@angular/core/testing';

import {FollowService} from './follow.service';

describe('FollowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FollowService]
    });
  });

  it('should be created', inject([FollowService], (service: FollowService) => {
    expect(service).toBeTruthy();
  }));
});

import {inject, TestBed} from '@angular/core/testing';

import {SocialPostsService} from './social-posts.service';

describe('SocialPostsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocialPostsService]
    });
  });

  it('should be created', inject([SocialPostsService], (service: SocialPostsService) => {
    expect(service).toBeTruthy();
  }));
});

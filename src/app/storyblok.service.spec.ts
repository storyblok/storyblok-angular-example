import { TestBed, inject } from '@angular/core/testing';

import { StoryblokService } from './storyblok.service';

describe('StoryblokService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoryblokService]
    });
  });

  it('should be created', inject([StoryblokService], (service: StoryblokService) => {
    expect(service).toBeTruthy();
  }));
});

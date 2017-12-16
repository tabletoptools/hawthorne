import { TestBed, inject } from '@angular/core/testing';

import { HawthorneService } from './hawthorne.service';

describe('HawthorneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HawthorneService]
    });
  });

  it('should be created', inject([HawthorneService], (service: HawthorneService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { LootServiceService } from './loot-service.service';

describe('LootServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LootServiceService]
    });
  });

  it('should be created', inject([LootServiceService], (service: LootServiceService) => {
    expect(service).toBeTruthy();
  }));
});

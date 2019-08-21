import { TestBed } from '@angular/core/testing';

import { ProServiceService } from './pro-service.service';

describe('ProServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProServiceService = TestBed.get(ProServiceService);
    expect(service).toBeTruthy();
  });
});

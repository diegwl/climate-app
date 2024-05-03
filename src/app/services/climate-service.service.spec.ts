import { TestBed } from '@angular/core/testing';

import { ClimateServiceService } from './climate-service.service';

describe('ClimateServiceService', () => {
  let service: ClimateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClimateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

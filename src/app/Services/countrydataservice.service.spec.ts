import { TestBed } from '@angular/core/testing';

import { CountrydataserviceService } from './countrydataservice.service';

describe('CountrydataserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountrydataserviceService = TestBed.get(CountrydataserviceService);
    expect(service).toBeTruthy();
  });
});

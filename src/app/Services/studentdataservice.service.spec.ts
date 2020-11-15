import { TestBed } from '@angular/core/testing';

import { StudentdataserviceService } from './studentdataservice.service';

describe('StudentdataserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentdataserviceService = TestBed.get(StudentdataserviceService);
    expect(service).toBeTruthy();
  });
});

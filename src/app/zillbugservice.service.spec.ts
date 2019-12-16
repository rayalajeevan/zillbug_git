import { TestBed } from '@angular/core/testing';

import { ZillbugserviceService } from './zillbugservice.service';

describe('ZillbugserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZillbugserviceService = TestBed.get(ZillbugserviceService);
    expect(service).toBeTruthy();
  });
});

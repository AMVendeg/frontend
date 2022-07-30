import { TestBed } from '@angular/core/testing';

import { SunCMEService } from './sun-cme.service';

describe('SunCMEService', () => {
  let service: SunCMEService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SunCMEService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

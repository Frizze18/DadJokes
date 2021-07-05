import { TestBed } from '@angular/core/testing';

import { DadejokeServiceService } from './dadejoke-service.service';

describe('DadejokeServiceService', () => {
  let service: DadejokeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadejokeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

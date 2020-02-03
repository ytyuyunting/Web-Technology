import { TestBed } from '@angular/core/testing';

import { FaverateService } from './faverate.service';

describe('FaverateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FaverateService = TestBed.get(FaverateService);
    expect(service).toBeTruthy();
  });
});

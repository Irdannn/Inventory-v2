import { TestBed } from '@angular/core/testing';

import { AlurbarangService } from './alurbarang.service';

describe('AlurbarangService', () => {
  let service: AlurbarangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlurbarangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

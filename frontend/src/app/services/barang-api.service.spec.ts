import { TestBed } from '@angular/core/testing';

import { BarangApiService } from './barang-api.service';

describe('BarangApiService', () => {
  let service: BarangApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarangApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

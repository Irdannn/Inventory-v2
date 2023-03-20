import { TestBed } from '@angular/core/testing';

import { ServiceBarangApi } from './barangApi.service';

describe('ProductService', () => {
  let service: ServiceBarangApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceBarangApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

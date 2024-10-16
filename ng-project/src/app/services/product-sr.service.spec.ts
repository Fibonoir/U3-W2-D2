import { TestBed } from '@angular/core/testing';

import { ProductSrService } from './product-sr.service';

describe('ProductSrService', () => {
  let service: ProductSrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductSrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

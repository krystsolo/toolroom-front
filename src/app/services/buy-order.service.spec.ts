import { TestBed } from '@angular/core/testing';

import { BuyOrderService } from './buy-order.service';

describe('BuyOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuyOrderService = TestBed.get(BuyOrderService);
    expect(service).toBeTruthy();
  });
});

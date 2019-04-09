import { TestBed } from '@angular/core/testing';

import { LendingOrderService } from './lending-order.service';

describe('LendingOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LendingOrderService = TestBed.get(LendingOrderService);
    expect(service).toBeTruthy();
  });
});

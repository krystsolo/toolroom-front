import { TestBed } from '@angular/core/testing';

import { DestructionOrderService } from './destruction-order.service';

describe('DestructionOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DestructionOrderService = TestBed.get(DestructionOrderService);
    expect(service).toBeTruthy();
  });
});

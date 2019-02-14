import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyOrderViewComponent } from './buy-order-view.component';

describe('BuyOrderViewComponent', () => {
  let component: BuyOrderViewComponent;
  let fixture: ComponentFixture<BuyOrderViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyOrderViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyOrderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

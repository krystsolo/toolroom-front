import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBuyOrdersComponent } from './all-buy-orders.component';

describe('AllBuyOrdersComponent', () => {
  let component: AllBuyOrdersComponent;
  let fixture: ComponentFixture<AllBuyOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBuyOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBuyOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

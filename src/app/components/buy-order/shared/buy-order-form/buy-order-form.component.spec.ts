import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyOrderFormComponent } from './buy-order-form.component';

describe('BuyOrderFormComponent', () => {
  let component: BuyOrderFormComponent;
  let fixture: ComponentFixture<BuyOrderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyOrderFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

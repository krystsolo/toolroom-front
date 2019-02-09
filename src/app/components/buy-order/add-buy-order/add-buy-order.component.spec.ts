import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBuyOrderComponent } from './add-buy-order.component';

describe('AddBuyOrderComponent', () => {
  let component: AddBuyOrderComponent;
  let fixture: ComponentFixture<AddBuyOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBuyOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBuyOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

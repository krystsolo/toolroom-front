import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBuyOrderComponent } from './edit-buy-order.component';

describe('EditBuyOrderComponent', () => {
  let component: EditBuyOrderComponent;
  let fixture: ComponentFixture<EditBuyOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBuyOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBuyOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

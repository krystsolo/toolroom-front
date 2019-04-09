import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LendingOrderViewComponent } from './lending-order-view.component';

describe('LendingOrderViewComponent', () => {
  let component: LendingOrderViewComponent;
  let fixture: ComponentFixture<LendingOrderViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendingOrderViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendingOrderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

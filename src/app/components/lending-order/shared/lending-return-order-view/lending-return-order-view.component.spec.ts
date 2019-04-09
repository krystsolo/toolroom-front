import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LendingReturnOrderViewComponent } from './lending-return-order-view.component';

describe('LendingReturnOrderViewComponent', () => {
  let component: LendingReturnOrderViewComponent;
  let fixture: ComponentFixture<LendingReturnOrderViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendingReturnOrderViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendingReturnOrderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LendingAndReturnOrderViewComponent } from './lending-and-return-order-view.component';

describe('LendingAndReturnOrderViewComponent', () => {
  let component: LendingAndReturnOrderViewComponent;
  let fixture: ComponentFixture<LendingAndReturnOrderViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendingAndReturnOrderViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendingAndReturnOrderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LendingOrderFormComponent } from './lending-order-form.component';

describe('LendingOrderFormComponent', () => {
  let component: LendingOrderFormComponent;
  let fixture: ComponentFixture<LendingOrderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendingOrderFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendingOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

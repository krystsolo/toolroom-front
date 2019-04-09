import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LendingOrderEditComponent } from './lending-order-edit.component';

describe('LendingOrderEditComponent', () => {
  let component: LendingOrderEditComponent;
  let fixture: ComponentFixture<LendingOrderEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendingOrderEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendingOrderEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

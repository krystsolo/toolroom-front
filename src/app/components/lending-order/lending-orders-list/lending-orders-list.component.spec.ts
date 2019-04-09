import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LendingOrdersListComponent } from './lending-orders-list.component';

describe('LendingOrdersListComponent', () => {
  let component: LendingOrdersListComponent;
  let fixture: ComponentFixture<LendingOrdersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendingOrdersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendingOrdersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

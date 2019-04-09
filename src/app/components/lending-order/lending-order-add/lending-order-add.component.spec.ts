import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LendingOrderAddComponent } from './lending-order-add.component';

describe('LendingOrderAddComponent', () => {
  let component: LendingOrderAddComponent;
  let fixture: ComponentFixture<LendingOrderAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendingOrderAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendingOrderAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LendingReturnTableComponent } from './lending-return-table.component';

describe('LendingReturnTableComponent', () => {
  let component: LendingReturnTableComponent;
  let fixture: ComponentFixture<LendingReturnTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendingReturnTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendingReturnTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

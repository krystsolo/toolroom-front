import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LendingReturnEditComponent } from './lending-return-edit.component';

describe('LendingReturnEditComponent', () => {
  let component: LendingReturnEditComponent;
  let fixture: ComponentFixture<LendingReturnEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendingReturnEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendingReturnEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

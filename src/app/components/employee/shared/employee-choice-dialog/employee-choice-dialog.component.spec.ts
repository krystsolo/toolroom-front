import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeChoiceDialogComponent } from './employee-choice-dialog.component';

describe('EmployeeChoiceDialogComponent', () => {
  let component: EmployeeChoiceDialogComponent;
  let fixture: ComponentFixture<EmployeeChoiceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeChoiceDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeChoiceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

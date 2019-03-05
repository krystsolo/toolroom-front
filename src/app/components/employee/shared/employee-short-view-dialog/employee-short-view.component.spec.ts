import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeShortViewComponent } from './employee-short-view.component';

describe('EmployeeShortViewComponent', () => {
  let component: EmployeeShortViewComponent;
  let fixture: ComponentFixture<EmployeeShortViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeShortViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeShortViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

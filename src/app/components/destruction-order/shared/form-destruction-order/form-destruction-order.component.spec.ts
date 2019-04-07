import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDestructionOrderComponent } from './form-destruction-order.component';

describe('FormDestructionOrderComponent', () => {
  let component: FormDestructionOrderComponent;
  let fixture: ComponentFixture<FormDestructionOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDestructionOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDestructionOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

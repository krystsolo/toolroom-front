import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDestructionOrderComponent } from './add-destruction-order.component';

describe('AddDestructionOrderComponent', () => {
  let component: AddDestructionOrderComponent;
  let fixture: ComponentFixture<AddDestructionOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDestructionOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDestructionOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDestructionOrderComponent } from './edit-destruction-order.component';

describe('EditDestructionOrderComponent', () => {
  let component: EditDestructionOrderComponent;
  let fixture: ComponentFixture<EditDestructionOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDestructionOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDestructionOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

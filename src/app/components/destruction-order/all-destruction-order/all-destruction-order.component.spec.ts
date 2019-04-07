import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDestructionOrderComponent } from './all-destruction-order.component';

describe('AllDestructionOrderComponent', () => {
  let component: AllDestructionOrderComponent;
  let fixture: ComponentFixture<AllDestructionOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDestructionOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDestructionOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

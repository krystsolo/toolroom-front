import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDestructionOrderComponent } from './view-destruction-order.component';

describe('ViewDestructionOrderComponent', () => {
  let component: ViewDestructionOrderComponent;
  let fixture: ComponentFixture<ViewDestructionOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDestructionOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDestructionOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

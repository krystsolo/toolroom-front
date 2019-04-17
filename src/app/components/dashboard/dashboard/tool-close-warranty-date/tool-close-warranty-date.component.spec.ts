import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolCloseWarrantyDateComponent } from './tool-close-warranty-date.component';

describe('ToolCloseWarrantyDateComponent', () => {
  let component: ToolCloseWarrantyDateComponent;
  let fixture: ComponentFixture<ToolCloseWarrantyDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolCloseWarrantyDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolCloseWarrantyDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolChoiceDialogComponent } from './tool-choice-dialog.component';

describe('ToolChoiceDialogComponent', () => {
  let component: ToolChoiceDialogComponent;
  let fixture: ComponentFixture<ToolChoiceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolChoiceDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolChoiceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

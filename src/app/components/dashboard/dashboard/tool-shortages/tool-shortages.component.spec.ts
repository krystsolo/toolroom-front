import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolShortagesComponent } from './tool-shortages.component';

describe('ToolShortagesComponent', () => {
  let component: ToolShortagesComponent;
  let fixture: ComponentFixture<ToolShortagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolShortagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolShortagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

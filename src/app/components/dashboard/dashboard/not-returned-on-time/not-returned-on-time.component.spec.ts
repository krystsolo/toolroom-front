import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotReturnedOnTimeComponent } from './not-returned-on-time.component';

describe('NotReturnedOnTimeComponent', () => {
  let component: NotReturnedOnTimeComponent;
  let fixture: ComponentFixture<NotReturnedOnTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotReturnedOnTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotReturnedOnTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

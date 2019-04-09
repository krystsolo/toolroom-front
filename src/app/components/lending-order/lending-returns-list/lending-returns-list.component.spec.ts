import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LendingReturnsListComponent } from './lending-returns-list.component';

describe('LendingReturnsListComponent', () => {
  let component: LendingReturnsListComponent;
  let fixture: ComponentFixture<LendingReturnsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendingReturnsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendingReturnsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

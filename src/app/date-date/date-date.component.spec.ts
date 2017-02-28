import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateDateComponent } from './date-date.component';

describe('DateDateComponent', () => {
  let component: DateDateComponent;
  let fixture: ComponentFixture<DateDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

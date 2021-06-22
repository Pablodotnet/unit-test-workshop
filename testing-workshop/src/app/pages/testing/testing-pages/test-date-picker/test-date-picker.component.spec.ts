import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDatePickerComponent } from './test-date-picker.component';

describe('TestDatePickerComponent', () => {
  let component: TestDatePickerComponent;
  let fixture: ComponentFixture<TestDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

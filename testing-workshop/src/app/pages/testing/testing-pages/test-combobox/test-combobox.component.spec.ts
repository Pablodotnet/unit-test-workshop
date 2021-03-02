import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComboboxComponent } from './test-combobox.component';

describe('TestComboboxComponent', () => {
  let component: TestComboboxComponent;
  let fixture: ComponentFixture<TestComboboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComboboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComboboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

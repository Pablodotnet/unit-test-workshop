import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagInputContainerComponent } from './tag-input-container.component';

describe('TagInputContainerComponent', () => {
  let component: TagInputContainerComponent;
  let fixture: ComponentFixture<TagInputContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagInputContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagInputContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

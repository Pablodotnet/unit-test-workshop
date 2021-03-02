import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsChildSectionComponent } from './tags-child-section.component';

describe('TagsChildSectionComponent', () => {
  let component: TagsChildSectionComponent;
  let fixture: ComponentFixture<TagsChildSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsChildSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsChildSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

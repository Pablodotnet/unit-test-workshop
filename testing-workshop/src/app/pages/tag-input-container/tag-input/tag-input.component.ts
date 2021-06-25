import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-tag-input',
  templateUrl: './tag-input.component.html',
  styleUrls: ['./tag-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TagInputComponent
    }
  ]
})
export class TagInputComponent implements OnInit, AfterViewInit, ControlValueAccessor {
  private tags = new BehaviorSubject<Array<any>>([]);
  tags$ = this.tags.asObservable();

  private get tagsValue(): Array<any> {
    return this.tags.getValue();
  }

  touched = false;
  disabled = false;

  newTag = '';
  paddingLeft = 10;

  @ViewChild('tagsUl') tagsUl: TemplateRef<any>;

  @Input() placeholder = 'Write something...';
  @Input() theme: 'dark' | 'light' = 'dark';

  onChange = (tags) => {};

  onTouched = () => {};

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.handleTagChanges();
    }, 1);
  }

  updateTagsValue(value: Array<any>) {
    this.tags.next(value);
    this.onChange(this.tagsValue);

    if (!!this.tagsUl) {
      setTimeout(() => {
        this.handleTagChanges();
      }, 1);
    }
  }

  addTag(tag) {
    this.markAsTouched();
    if (!this.disabled && !!tag) {
      const tempTags = [...this.tagsValue];
      tempTags.push(tag);
      this.updateTagsValue(tempTags);
      this.newTag = '';
    }
  }

  removeTag(index) {
    this.markAsTouched();
    if (!this.disabled) {
      const tempTags = [...this.tagsValue];
      tempTags.splice(index, 1);
      this.updateTagsValue(tempTags);
    }
  }

  handleTagChanges() {
    const extraCushion = 15;
    const actualWidth = (this.tagsUl as any).nativeElement.clientWidth;
    this.paddingLeft = actualWidth + extraCushion;
    (this.tagsUl as any).nativeElement.scrollTo((this.tagsUl as any).nativeElement.scrollWidth, 0);
  }

  writeValue(tags: Array<any>) {
    this.updateTagsValue(tags);
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

}

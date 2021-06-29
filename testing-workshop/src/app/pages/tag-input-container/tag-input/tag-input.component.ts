import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from '@angular/forms';
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
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: TagInputComponent
    }
  ]
})
export class TagInputComponent implements OnInit, AfterViewInit, ControlValueAccessor, Validator {
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

  /**
   * Text to show when nothing is selected.
   */
  @Input() placeholder = 'Write something...';
  /**
   * Theme for background color.
   */
  @Input() theme: 'dark' | 'light' = 'dark';
  /**
   * Sets the invalid text.
   */
  @Input() invalidText: string | TemplateRef<any>;
  /**
   * Set to `true` for an invalid label component.
   */
  @Input() invalid = false;
  /**
   * Displays a loading icon on the input
   */
  @Input() showLoadIcon = false;

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

  validate(control: AbstractControl): ValidationErrors | null {
    const tagsArray = control.value;
    const hasDuplicates = someArray => someArray.some((item, index) => someArray.indexOf(item) !== index);
    if (hasDuplicates(tagsArray)) {
      return {
        hasDuplicates: true
      };
    }
    return null;
  }

  public isTemplate(value) {
    return value instanceof TemplateRef;
  }

}

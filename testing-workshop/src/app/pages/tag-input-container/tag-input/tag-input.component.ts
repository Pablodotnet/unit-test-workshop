import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-tag-input',
  templateUrl: './tag-input.component.html',
  styleUrls: ['./tag-input.component.scss']
})
export class TagInputComponent implements OnInit, AfterViewInit {
  private tags = new BehaviorSubject<Array<any>>([]);
  tags$ = this.tags.asObservable();

  private get tagsValue(): Array<any> {
    return this.tags.getValue();
  }

  @ViewChild('tagsUl') tagsUl: TemplateRef<any>;

  newTag = '';
  paddingLeft = 10;

  constructor() { }

  ngOnInit(): void {
    this.setTags();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.handleTagChanges();
    }, 100);
  }

  updateTagsValue(value: Array<any>) {
    this.tags.next(value);
    if (!!this.tagsUl) {
      setTimeout(() => {
        this.handleTagChanges();
      }, 100);
    }
  }

  setTags() {
    this.updateTagsValue(['tag one', 'tag two', 'tag three']);
  }

  addTag(tag) {
    const tempTags = [...this.tagsValue];
    tempTags.push(tag);
    this.updateTagsValue(tempTags);
    this.newTag = '';
  }

  removeTag(index) {
    const tempTags = [...this.tagsValue];
    tempTags.splice(index, 1);
    this.updateTagsValue(tempTags);
  }

  handleTagChanges() {
    const extraCushion = 15;
    const actualWidth = (this.tagsUl as any).nativeElement.clientWidth;
    this.paddingLeft = actualWidth + extraCushion;
    (this.tagsUl as any).nativeElement.scrollTo((this.tagsUl as any).nativeElement.scrollWidth, 0);
  }

}

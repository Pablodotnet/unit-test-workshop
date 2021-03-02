import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tags-child-section',
  templateUrl: './tags-child-section.component.html',
  styleUrls: ['./tags-child-section.component.scss']
})
export class TagsChildSectionComponent {

  @Output() emitCloseTag = new EventEmitter();

  constructor() { }

  handleCloseTag() {
    console.log('emit close tag');
    this.emitCloseTag.emit();
  }

}

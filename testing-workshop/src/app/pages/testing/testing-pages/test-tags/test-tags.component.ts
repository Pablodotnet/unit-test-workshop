import { Component } from '@angular/core';

@Component({
  selector: 'app-test-tags',
  templateUrl: './test-tags.component.html',
  styleUrls: ['./test-tags.component.scss']
})
export class TestTagsComponent {

  constructor() { }

  handleChildCloseTag() {
    console.log('handleChildCloseTag');
  }

}

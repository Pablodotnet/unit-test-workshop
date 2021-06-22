import { Component } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent {

  componentsList: { name: string, url: string }[] = [
    { name: 'ComboBox', url: '/testing-components/combobox' },
    { name: 'Tags', url: '/testing-components/tags' },
    { name: 'Date picker', url: '/testing-components/date-picker' },
  ];

  constructor() { }

}

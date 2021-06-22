import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestComboboxComponent } from './testing-pages/test-combobox/test-combobox.component';
import { TestDatePickerComponent } from './testing-pages/test-date-picker/test-date-picker.component';
import { TestTagsComponent } from './testing-pages/test-tags/test-tags.component';

// Components
import { TestingComponent } from './testing.component';

const routes: Routes = [
  {
    path: '',
    component: TestingComponent
  },
  {
    path: 'combobox',
    component: TestComboboxComponent,
  },
  {
    path: 'tags',
    component: TestTagsComponent,
  },
  {
    path: 'date-picker',
    component: TestDatePickerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestingRoutingModule { }

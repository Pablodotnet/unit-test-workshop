import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { TestingComponent } from './testing.component';

// Pipes
import { SelectDropdownOptionPipe } from './pipes/selectDropdownOption/select-dropdown-option.pipe';
import { TestingRoutingModule } from './testing-routing.module';
import { TestComboboxComponent } from './testing-pages/test-combobox/test-combobox.component';
import {
  ComboBoxModule,
  DatePickerModule,
  InputModule,
  TagModule
} from 'carbon-components-angular';
import { TestTagsComponent } from './testing-pages/test-tags/test-tags.component';
import { CommonModule } from '@angular/common';
import { TagsChildSectionComponent } from './testing-pages/test-tags/tags-child-section/tags-child-section.component';
import { TestDatePickerComponent } from './testing-pages/test-date-picker/test-date-picker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TestingComponent,
    SelectDropdownOptionPipe,
    TestComboboxComponent,
    TestTagsComponent,
    TagsChildSectionComponent,
    TestDatePickerComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TestingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComboBoxModule,
    TagModule,
    DatePickerModule,
    InputModule,
  ],
})
export class TestingModule { }

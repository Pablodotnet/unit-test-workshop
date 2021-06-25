import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tag-input-container',
  templateUrl: './tag-input-container.component.html',
  styleUrls: ['./tag-input-container.component.scss']
})
export class TagInputContainerComponent implements OnInit {

  testForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.setForm();
  }

  setForm() {
    this.testForm = this.formBuilder.group({
      someList: [['hi', 'bye']],
    });
  }

  handleSubmit() {
    console.log('this.testForm.value: ', this.testForm.value);
  }

}

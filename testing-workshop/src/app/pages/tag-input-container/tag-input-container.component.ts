import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tag-input-container',
  templateUrl: './tag-input-container.component.html',
  styleUrls: ['./tag-input-container.component.scss']
})
export class TagInputContainerComponent implements OnInit {

  testForm: FormGroup;
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.setForm();
  }

  setForm() {
    this.testForm = this.formBuilder.group({
      someList: [['hi', 'bye'], Validators.required],
    });
  }

  handleSubmit() {
    console.log('this.testForm: ', this.testForm);
  }

}

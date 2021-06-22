import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-date-picker',
  templateUrl: './test-date-picker.component.html',
  styleUrls: ['./test-date-picker.component.scss']
})
export class TestDatePickerComponent implements OnInit {
  private datePipe = new DatePipe('en-US');
  private yearRegex = /^\d{4}$/;

  dateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.setForm();
  }

  setForm() {
    this.dateForm = this.fb.group({
      year: new FormControl('', Validators.pattern(this.yearRegex)),
      yearInput: new FormControl('', [Validators.required, Validators.pattern(this.yearRegex)])
    });
  }

  handleYearSelection($event) {
    console.log('🚀 ~ handleYearSelection ~ $event', $event);
    if (!!$event && !!$event.length) {
      const transformedDate = $event.map(inputDate => this.datePipe.transform(inputDate, 'y'));
      this.dateForm.get('year').setValue(transformedDate[0]);
      // this.dateForm.get('year').updateValueAndValidity({ onlySelf: false, emitEvent: true });
      // console.log('this.dateForm.get year value', this.dateForm.get('year').value);
    }
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectDropdownOption'
})
export class SelectDropdownOptionPipe implements PipeTransform {

  transform(value: any[], selection: string | string[] | number): any {
    if (!selection || (typeof selection === 'string' && !selection.length)) {
      return this.setAllOptionsToFalse(value);
    }

    if ((typeof selection === 'string' && !!selection) || typeof selection === 'number') {
      value.forEach(item => {
        if (!!item) {
          item.selected = item.value === selection;
        }
      });
      return value;
    } else if (Array.isArray(selection)) {
      value.forEach(item => {
        if (!!item) {
          item.selected = selection.includes(item.value);
        }
      });
      return value;
    } else {
      return this.setAllOptionsToFalse(value);
    }
  }

  private setAllOptionsToFalse(optionsList: any[]) {
    // optionsList.forEach(item => item.selected = false);
    return optionsList.map(item => ({ ...item, selected: false }));
  }

}

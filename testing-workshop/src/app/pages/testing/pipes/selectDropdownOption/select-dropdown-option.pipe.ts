import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectDropdownOption'
})
export class SelectDropdownOptionPipe implements PipeTransform {

  transform(value: any[], selection: string | string[] | number): any {
    console.log('🚀 ~ file: select-dropdown-option.pipe.ts ~ line 9 ~ SelectDropdownOptionPipe ~ transform ~ selection', selection);
    console.log('🚀 ~ file: select-dropdown-option.pipe.ts ~ line 9 ~ SelectDropdownOptionPipe ~ transform ~ value', value);
    if (!selection || (typeof selection === 'string' && !selection.length)) {
      console.log('there is no selection');
      return this.setAllOptionsToFalse(value);
    }

    if ((typeof selection === 'string' && !!selection) || typeof selection === 'number') {
      console.log('selection is string or number');
      value.forEach(item => {
        if (!!item) {
          console.log('item exists: ', item);
          item.selected = item.value === selection;
        }
      });
      console.log('value: ', value);
      return value;
    } else if (Array.isArray(selection)) {
      console.log('selection is array');
      value.forEach(item => {
        if (!!item) {
          console.log('item when array: ', item);
          item.selected = selection.includes(item.value);
        }
      });
      return value;
    } else {
      console.log('setting all options to false in else');
      return this.setAllOptionsToFalse(value);
    }
  }


  private setAllOptionsToFalse(optionsList: any[]) {
    // optionsList.forEach(item => item.selected = false);
    return optionsList.map(item => ({ ...item, selected: false }));
  }

}

import {AbstractControl, ValidatorFn} from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const regex = /[0-9]{3}/;
    const forbidden = regex.test(control.value);
    return forbidden ? null : {forbiddenPassword: {value: control.value}};
  };
}

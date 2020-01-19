import { AbstractControl, ValidatorFn } from '@angular/forms';

// this is simple way to make costum validation

// export function forbiddenPasswordValidator(control: AbstractControl): {[key: string]: any} | null{
//     const forbidden = /admin/.test(control.value);
//     return forbidden ? { 'forbiddenPassword' : {value: control.value}} : null;
// }

// this is called factory function which takes a parameter and checks accordingly. this is better way to do costum validation
export function forbiddenPasswordValidator(forbiddenPassword: RegExp):  ValidatorFn {
  return  (control: AbstractControl): { [key: string]: any } | null =>{
      const forbidden = forbiddenPassword.test(control.value);
        return forbidden ? { 'forbiddenPassword': { value: control.value } } : null;
    };
};
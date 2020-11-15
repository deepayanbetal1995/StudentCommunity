import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    let currentYear : any = new Date().getFullYear();
    let userbirthyear: any = new Date(value).getFullYear();
    let userAge = currentYear-userbirthyear;
    return userAge;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class UserspipePipe implements PipeTransform {

  transform(value: any): any {
    let currentYear :any =new Date().getFullYear();
    let userBirthYear:any=new Date(value).getFullYear();
    let userAge=currentYear-userBirthYear;
    return userAge ;
  }

}

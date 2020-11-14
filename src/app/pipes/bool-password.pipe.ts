import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strPassword'
})
export class BoolPasswordPipe implements PipeTransform {

  transform(aPassword: string): string {
    let len = aPassword.length;
    let mask = "";
    for(let idx = 0; idx < len; idx++) {
      mask += "#"
    }
    return mask;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(subject_list: any[], field: string): any[] {
    return subject_list.sort((a, b) => {
      if (a[field] < b[field]) {
        return -1;
      }
      else if (a[field] > b[field]) {
        return 1;
      }
      else {
        return 0;
      }
    })
  }
}




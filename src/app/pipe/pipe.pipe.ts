import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: any, ...args: any[]) {
    
  }
  // transform(subject_list : any): any {
  //   return subject_list.sort((a,b) => a.subjectName.localeCompare(b.subjectName));
  // }

}

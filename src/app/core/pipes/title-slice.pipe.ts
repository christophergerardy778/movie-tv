import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleSlice'
})
export class TitleSlicePipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 20) return `${value.slice(0, 18)}...`;
    else return value;
  }

}

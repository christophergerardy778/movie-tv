import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textSlice'
})
export class TextSlicePipe implements PipeTransform {

  transform(value: string): string {
    return `${value.slice(0, 70)}...`;
  }

}

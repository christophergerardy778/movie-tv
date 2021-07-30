import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textSliceBig'
})
export class TextSliceBigPipe implements PipeTransform {

  transform(value: string): string {
    return `${value.slice(0, 155)}...`;
  }

}

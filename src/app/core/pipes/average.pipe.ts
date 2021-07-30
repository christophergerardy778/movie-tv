import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'average'
})
export class AveragePipe implements PipeTransform {

  transform(count: string): string {
    return ((5 / 10) * (Number.parseInt(count))).toFixed(1);
  }

}

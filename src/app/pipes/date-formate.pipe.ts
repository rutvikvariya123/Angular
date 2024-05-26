import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormate'
})
export class DateFormatePipe implements PipeTransform {

  private datePipe: DatePipe = new DatePipe('en-US');

transform(value: any, format: string = 'dd/MM/yyyy'): string | null {
    return this.datePipe.transform(value, format);
  }
}

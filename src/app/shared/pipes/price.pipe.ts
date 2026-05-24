import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {
  transform(value: number | string | null | undefined, currency = 'USD', locale = 'en-US'): string {
    const amount = typeof value === 'string' ? Number(value) : value;

    if (amount === null || amount === undefined || Number.isNaN(amount)) {
      return '';
    }

    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency
    }).format(amount);
  }
}
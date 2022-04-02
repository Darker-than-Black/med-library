import { PrimeNGConfig, FilterService, SelectItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

import { PRIMENG_TRANSLATIONS } from '../configs/primengTranslations';

const dateRangeFilterName = 'date-range';

@Component({
  template: '',
})
export class PrimengConfigMixin implements OnInit {
   constructor(private primeConfig: PrimeNGConfig, private filterService: FilterService) {}

  matchModeOptions: SelectItem[] = [
    { label: 'Date range', value: dateRangeFilterName },
  ];


  ngOnInit() {
    this.primeConfig.setTranslation(PRIMENG_TRANSLATIONS);

    this.filterService.register(dateRangeFilterName, this.dateRangeHandler);
   }

   private dateRangeHandler(value?: string, filter?: (Date | undefined)[]): boolean {
    const [startDate, endDate] = filter || [];

     if (!startDate) return true;

     if (!value) return false;

     const currentDate = new Date(value).getTime();

     if (endDate) {
       return startDate.getTime() <= currentDate && currentDate <= endDate.getTime();
     }

     return startDate.getTime() <= currentDate;
   }
}

import { Component, Input } from '@angular/core';
import { FilterService, SelectItem } from 'primeng/api';

const dateRangeFilterName = 'date-range';
const END_DATE = {
  HOURS: 23,
  MINUTES: 59,
};

@Component({
  selector: 'filter-date',
  templateUrl: './filter-date.component.html',
  styleUrls: ['./filter-date.component.scss']
})
export class FilterDateComponent {
  constructor(private filterService: FilterService) {}

  @Input() key!: string;

  matchModeOptions: SelectItem[] = [
    { label: 'Date range', value: dateRangeFilterName },
  ];

  ngOnInit() {
    this.filterService.register(dateRangeFilterName, this.dateRangeHandler);
  }

  private dateRangeHandler(value?: string, filter?: (Date | undefined)[]): boolean {
    const [startDate, endDate] = filter || [];

    if (!startDate) return true;

    if (!value) return false;

    const currentDate = new Date(value).getTime();

    if (endDate) {
      return startDate.getTime() <= currentDate && currentDate < endDate.setHours(END_DATE.HOURS, END_DATE.MINUTES);
    }

    return startDate.getTime() <= currentDate;
  }
}

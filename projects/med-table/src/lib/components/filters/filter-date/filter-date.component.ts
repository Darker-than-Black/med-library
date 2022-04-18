import { Component, Input } from '@angular/core';

import { FilterService, SelectItem } from 'primeng/api';
import { FilterMethods } from '../../../services/FilterDataHandler/FilterMethods';

const dateRangeFilterName = 'date-range';

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
    this.filterService.register(dateRangeFilterName, FilterMethods.dateRangeHandler);
  }
}

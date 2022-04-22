import { Component, Input } from '@angular/core';
import { FilterService, SelectItem } from 'primeng/api';
import { FilterMethods } from '../../../services/FilterDataHandler/FilterMethods';

const checkboxFilterName = 'bool-exact';

@Component({
  selector: 'filter-checkbox',
  templateUrl: './filter-checkbox.component.html',
  styleUrls: ['./filter-checkbox.component.scss']
})
export class FilterCheckboxComponent {
  constructor(private filterService: FilterService) {}

  @Input() key!: string;

  matchModeOptions: SelectItem[] = [
    { label: 'Checkbox', value: checkboxFilterName },
  ];

  ngOnInit() {
    this.filterService.register(checkboxFilterName, FilterMethods.checkboxHandler);
  }
}

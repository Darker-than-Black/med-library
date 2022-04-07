import { Component, Input } from '@angular/core';

@Component({
  selector: 'filter-text',
  templateUrl: './filter-text.component.html',
  styleUrls: ['./filter-text.component.scss']
})
export class FilterTextComponent {
  @Input() key!: string;
}

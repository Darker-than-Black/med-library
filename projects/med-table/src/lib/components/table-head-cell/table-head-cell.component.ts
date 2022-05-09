import {Component, ElementRef, Input, TemplateRef, ViewChild} from '@angular/core';

import {MedTableColumnConfig} from '../../types/MedTableColumnConfig';

@Component({
  selector: 'table-head-cell',
  templateUrl: './table-head-cell.component.html',
  styleUrls: ['./table-head-cell.component.scss']
})
export class TableHeadCellComponent {
  @Input() config!: MedTableColumnConfig;
  @Input() template?: TemplateRef<any>;

  @ViewChild('contentRef') contentRef!: ElementRef;

  get isEmptyTemplate(): boolean {
    // TODO should show default value if slot "template" is empty
    const { nativeElement } = this.contentRef || {};
    return !(nativeElement && nativeElement.innerText);
  }
}

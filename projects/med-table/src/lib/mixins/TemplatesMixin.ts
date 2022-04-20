import { AfterContentInit, Component, ContentChildren, QueryList, TemplateRef } from '@angular/core';

import { MedTemplateDirective } from '../directives/med-template.directive';

@Component({
  template: '',
})
export class TemplatesMixin implements AfterContentInit {
  @ContentChildren(MedTemplateDirective) templates!: QueryList<MedTemplateDirective>;

  rowExpansion?: TemplateRef<any>;
  toolbarTemplate?: TemplateRef<any>;
  tableDataTemplate?: TemplateRef<any>;
  paginatorTemplate?: TemplateRef<any>;

  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case 'toolbar':
          this.toolbarTemplate = item.template;
          break;
        case 'tableData':
          this.tableDataTemplate = item.template;
          break;
        case 'paginator':
          this.paginatorTemplate = item.template;
          break;
        case 'rowExpansion':
          this.rowExpansion = item.template;
          break;
      }
    });
  }
}

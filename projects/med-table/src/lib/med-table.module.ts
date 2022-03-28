import { NgModule } from '@angular/core';

import { AccordionModule } from 'primeng/accordion';

import { MedTableComponent } from './med-table.component';

@NgModule({
  declarations: [
    MedTableComponent
  ],
  imports: [
    AccordionModule,
  ],
  exports: [
    MedTableComponent
  ]
})
export class MedTableModule { }

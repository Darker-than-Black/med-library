import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { MedDynamicFormModule } from 'med-dynamic-form';

import { MedTableComponent } from './med-table.component';
import { TableCellComponent } from './components/table-cell/table-cell.component';
import { DateRangeComponent } from './components/forms/date-range/date-range.component';
import { MedTemplateDirective } from './directives/med-template.directive';
import { FilterTextComponent } from './components/filters/filter-text/filter-text.component';
import { FilterDateComponent } from './components/filters/filter-date/filter-date.component';
import { FilterSelectComponent } from './components/filters/filter-select/filter-select.component';
import { FilterCheckboxComponent } from './components/filters/filter-checkbox/filter-checkbox.component';
import { TableHeadCellComponent } from './components/table-head-cell/table-head-cell.component';

@NgModule({
  declarations: [
    MedTableComponent,
    TableCellComponent,
    DateRangeComponent,
    MedTemplateDirective,
    FilterTextComponent,
    FilterDateComponent,
    FilterSelectComponent,
    FilterCheckboxComponent,
    TableHeadCellComponent,
  ],
  imports: [
    FormsModule,
    TableModule,
    ButtonModule,
    BrowserModule,
    CalendarModule,
    InputTextModule,
    MultiSelectModule,
    ReactiveFormsModule,
    MedDynamicFormModule,
    BrowserAnimationsModule,
  ],
  exports: [
    MedTableComponent,
    MedTemplateDirective,
  ]
})
export class MedTableModule { }

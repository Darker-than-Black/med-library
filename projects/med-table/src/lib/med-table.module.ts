import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { MedDynamicFormModule } from 'med-dynamic-form';

import { MedTableComponent } from './med-table.component';
import { TableDataComponent } from './components/table-data/table-data.component';
import { DateRangeComponent } from './components/forms/date-range/date-range.component';

@NgModule({
  declarations: [
    MedTableComponent,
    TableDataComponent,
    DateRangeComponent,
  ],
  imports: [
    FormsModule,
    TableModule,
    ButtonModule,
    ToolbarModule,
    BrowserModule,
    CalendarModule,
    InputTextModule,
    MultiSelectModule,
    ReactiveFormsModule,
    MedDynamicFormModule,
    BrowserAnimationsModule,
  ],
  exports: [
    MedTableComponent
  ]
})
export class MedTableModule { }

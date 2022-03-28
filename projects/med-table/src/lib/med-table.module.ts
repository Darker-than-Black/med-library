import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';

import { MedTableComponent } from './med-table.component';
import { TableDataComponent } from './components/table-data/table-data.component';

@NgModule({
  declarations: [
    MedTableComponent,
    TableDataComponent
  ],
  imports: [
    FormsModule,
    TableModule,
    BrowserModule,
    InputTextModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  exports: [
    MedTableComponent
  ]
})
export class MedTableModule { }

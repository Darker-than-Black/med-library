import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MedTableModule } from 'med-table';
import { MedDynamicFormModule } from 'med-dynamic-form';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MedTableModule,
    MedDynamicFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

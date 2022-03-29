import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MedTableModule } from 'med-table';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MedTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

import { MedTableModule } from 'med-table';
import { MedDynamicFormModule } from 'med-dynamic-form';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './views/table/table.component';
import { FormComponent } from './views/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    AppRoutingModule,
    MenubarModule,
    MedTableModule,
    MedDynamicFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

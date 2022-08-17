import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';

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
    FormComponent,
  ],
  imports: [
    ButtonModule,
    BrowserModule,
    MenubarModule,
    ToolbarModule,
    MedTableModule,
    AppRoutingModule,
    MedDynamicFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

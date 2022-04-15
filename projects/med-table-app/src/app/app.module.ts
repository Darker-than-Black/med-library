import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MedTableModule } from 'med-table';
import { MedDynamicFormModule } from 'med-dynamic-form';

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import { ItemFormComponent } from './item-form/item-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemFormComponent,
  ],
  imports: [
    ToastModule,
    ButtonModule,
    DialogModule,
    BrowserModule,
    MedTableModule,
    HttpClientModule,
    MedDynamicFormModule,
  ],
  providers: [
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

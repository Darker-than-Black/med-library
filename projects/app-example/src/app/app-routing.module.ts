import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './views/form/form.component';
import { TableComponent } from './views/table/table.component';
import { TableJsonParseComponent } from "./views/table-json-parse/table-json-parse.component";

const routes: Routes = [
  { path: '', component: TableComponent },
  { path: 'table-json', component: TableJsonParseComponent },
  { path: 'form', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

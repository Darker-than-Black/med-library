import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly items: MenuItem[] = [
    {
      label: 'Table',
      icon: 'pi pi-fw pi-table',
      routerLink: '/'
    },
    {
      label: 'Table Json Parse',
      icon: 'pi pi-fw pi-table',
      routerLink: '/table-json'
    },
    {
      label: 'Form',
      icon: 'pi pi-fw pi-pencil',
      routerLink: '/form'
    }
  ];
}

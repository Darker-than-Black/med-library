# med-table

### Wrapper over table of [primeng](https://primefaces.org/primeng/) library for Ministry of Health

[![NPM](https://nodei.co/npm/med-table.png)](https://nodei.co/npm/med-table/)

[![npm version](https://badge.fury.io/js/med-table.svg)](https://badge.fury.io/js/med-table)

## Dependencies

```js
$ npm i @angular/cdk primeng primeflex primeicons
```

## Styles

```css
node_modules/primeicons/primeicons.css
node_modules/primeflex/primeflex.css
node_modules/primeng/resources/primeng.min.css
```

## Installation

#### NPM
```js
$ npm i med-table
```

#### YARN
```js
$ yarn add med-table
```


## Register the component

#### Global

```js
import { MedTableModule } from 'med-table';

imports: [
  MedTableModule,
]
```

## med-table properties

| Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Required | Description |
| :--- | :--- | :--- | :--- |
| `data` | Object[] | **true** | Table data |
| `config` | [MedTableColumnConfig](https://github.com/Darker-than-Black/med-library/blob/main/projects/med-table/src/lib/types/MedTableColumnConfig.ts) [] | **true** | Columns config |
| `loading` | Boolean | false | Show loading data process **Default: false** |
| `settings` | [MedTableSettings](https://github.com/Darker-than-Black/med-library/blob/main/projects/med-table/src/lib/types/MedTableSettings.ts) | false |  **[Default](https://github.com/Darker-than-Black/med-library/blob/main/projects/med-table/src/lib/configs/defaultTableSettings.ts)** |

## Usage

**Table usage**

```angular2html
<med-table
  [data]="data"
  [loading]="loading"
  [config]="config"
  [settings]="settings"
></med-table>
```

## Templates

Table is a template driven component with named templates such as header and body that we've used so far. Templates grant a great level of customization and flexibility where you have total control over the presentation while table handles the features such as paging, sorting, filtering and more. This speeds up development without sacrificing flexibility. Here is the full list of available templates.

| Name           | Description                                          |
|:---------------|:-----------------------------------------------------|
| `toolbar`      | Toolbar content upper the table                      |
| `paginator`    | Custom content for the left section of the paginator | 
| `tableData`    | Custom content for the table data cell               |
| `rowExpansion` | A row can be expanded to display additional content  |

```angular2html
<med-table [data]="data" [loading]="loading" [config]="config">
  <ng-template mTemplate="toolbar">
    <nav>
      <a href="link">Home</a>
    </nav>
  </ng-template>
  
  <ng-template mTemplate="tableData" let-data>
    {{ data }}
  </ng-template>
  
  <ng-template mTemplate="paginator">
    <button>Click</button>
  </ng-template>
</med-table>
```

**Custom column**

*tableData* template properties:

| Name | Default | Description |
| :--- | :--- | :--- |
| `data` | **true** | Data of the data cell |
| `item` | false | Object from the table row | 
| `config` | false | [Object](https://github.com/Darker-than-Black/med-library/blob/main/projects/med-table/src/lib/types/MedTableColumnConfig.ts) from the table column | 

```angular2html
<med-table [data]="data" [loading]="loading" [config]="config">
  <ng-template mTemplate="tableData" let-data let-item="item" let-config="config">
    <ng-container [ngSwitch]="config.key">
      <ng-container *ngSwitchCase="'name'" >
        <a routerLink="/link">{{ data }}</a>
        <button type="button">Отримано</button>
      </ng-container>

      <span *ngSwitchCase="'status.name'" class="final-status">
        {{ data }}
      </span>
    </ng-container>
  </ng-template>
</med-table>
```

## Edit

Cell editing provides a rapid and user friendly way to manipulate data.

```ts
import { MedTableColumnConfig, FIELD_TYPES, MedUpdateColumnEvent } from 'med-table';

@Component({
  selector: 'app-root',
  template: `
    <med-table
      [data]="data"
      [loading]="loading"
      [config]="tableConfig"
      (updateColumn)="onUpdateColumn($event)"
    ></med-table>
  `
})
export class AppComponent {
  data: any[] = [...];
  tableConfig: MedTableColumnConfig[] = [
    {
      key: 'key',
      label: 'Label',
      editorType: FIELD_TYPES.TEXT,
    },
    ...
  ];

  onUpdateColumn(event: MedUpdateColumnEvent<any>) {
      ...
  }
}
```

**Editor field types**

[Link](https://github.com/Darker-than-Black/med-library/blob/main/projects/med-dynamic-form/src/lib/constants/fieldTypes.ts)

```ts
export enum FIELD_TYPES {
  TEXT = 'text',
  NUMBER = 'number',
  TEXTAREA = 'textarea',
  SELECT = 'select',
  MASK = 'mask',
  DATE = 'date',
}
```

If you use FIELD_TYPES.SELECT, you need to set the data for the selected parameters with **MedTableService.setSelectData(data: [MedSelectOption<any>](https://github.com/Darker-than-Black/med-library/blob/main/projects/med-table/src/lib/types/MedSelectOption.ts), key: string)**.

**key** param must to be as same as **key** fields in [MedTableColumnConfig](https://github.com/Darker-than-Black/med-library/blob/main/projects/med-table/src/lib/types/MedTableSettings.ts)

```ts
import { MedTableService, MedSelectOption } from 'med-table';

...

constructor(private medTableService: MedTableService) {
  const data: MedSelectOption<any> = [...];
  const key: string = 'key';
  medTableService.setSelectData(data, key);
}
```



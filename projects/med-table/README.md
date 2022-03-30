# MedTable

### Wrapper over table of [primeng](https://primefaces.org/primeng/) library for Ministry of Health

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

## Usage

**Basic Usage**

```angular2html
<med-table
  [data]="data"
  [loading]="loading"
  [config]="config"
  [settings]="settings"
></med-table>
```

**Custom column**
```angular2html
<med-table
  [data]="data"
  [loading]="loading"
  [config]="config"
  [tableDataTemplate]="tableDataTemplate"
>
  <ng-template #tableDataTemplate let-data let-item="item" let-config="config">
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

## Props

| Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Type | Required | Description |
| ----------------- | :--- | :--- | :--- |
| `data` | Array<Object> | **true** | Table data |
| `config` | Array<[MedTableColumnConfig](https://github.com/Darker-than-Black/med-library/blob/main/projects/med-table/src/lib/types/table.ts#L31) > | **true** | Columns config |
| `loading` | Boolean | false | Show loading data process **Default: false** |
| `settings` | [MedTableSettings](https://github.com/Darker-than-Black/med-library/blob/main/projects/med-table/src/lib/types/table.ts#L17) | false |  **[Default](https://github.com/Darker-than-Black/med-library/blob/main/projects/med-table/src/lib/configs/defaultTableSettings.ts)** |

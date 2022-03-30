# MedTable

### Wrapper over [@ngx-formly/core](https://github.com/ngx-formly/ngx-formly) library for Ministry of Health

## Dependencies

```js
$ npm i @ngx-formly/core primeng primeflex
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
$ npm i med-dynamic-form
```

#### YARN
```js
$ yarn add med-dynamic-form
```


## Register the component

#### Global

```js
import { MedDynamicFormModule } from 'med-dynamic-form';

imports: [
  MedDynamicFormModule,
]
```

## Usage

**Basic Usage**

```angular2html
<med-dynamic-form
  [form]="form"
  [config]="config"
></med-dynamic-form>
```

## Props

| Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Type | Required |
| ----------------- | :--- | :--- |
| `form` | [FormGroup](https://angular.io/api/forms/FormGroup) | **true** |
| `config` | Array<[MedFormFieldConfig](https://github.com/Darker-than-Black/med-library/blob/main/projects/med-dynamic-form/src/lib/types/form.ts#L4) > | **true** |

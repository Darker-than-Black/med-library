import { set, clone } from 'lodash';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';
import {MedFormFieldConfig} from 'med-dynamic-form';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';

import {STRING} from '../../constants/string';
import {EditorBuilder} from './editor-builder';
import {CELL_TYPES} from '../../types/cellTypes';
import {TableCell} from '../../services/TableCell';
import {MedTableColumnConfig} from '../../types/MedTableColumnConfig';
import {MedUpdateColumnEvent} from '../../types/MedUpdateColumnEvent';

const DEFAULT_VISIBLE_EDITOR_HANDLER = () => true;

@Component({
  selector: 'table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.scss']
})
export class TableCellComponent<ItemType extends Record<string, any>> implements OnInit, AfterViewInit {
  constructor(private cd: ChangeDetectorRef, private fb: FormBuilder) {}

  @Input() template?: TemplateRef<any>;

  @Input() set config(newValue: MedTableColumnConfig) {
    this._tableCell.setConfig(newValue);
    this._config = newValue;
  }

  get config(): MedTableColumnConfig {
    return this._config;
  }

  @Input() set item(newValue: ItemType) {
    this._tableCell.setItem(newValue);
    this._item = newValue;
  }

  get item(): ItemType {
    return this._item as ItemType;
  }

  @Output() update = new EventEmitter<MedUpdateColumnEvent<ItemType>>();

  @ViewChild('contentRef') contentRef!: ElementRef;

  readonly cellType = CELL_TYPES;
  fields: MedFormFieldConfig[] = [];
  form: any = new FormGroup({});
  private _item: ItemType | {} = {};
  private _config: MedTableColumnConfig = {key: '', label: ''};
  private _tableCell = new TableCell<ItemType>();

  get fieldData(): string {
    return this._tableCell.fieldData;
  }

  get previewData(): string {
    return this._tableCell.previewData;
  }

  get linkUrl(): string {
    const { url, keyParam } = this.config.linkOptions || {};

    if(!url) return STRING.EMPTY;

    if (keyParam) {
      const param = this._tableCell.getValue(this.item, keyParam);
      return `${url}?${keyParam}=${param}`;
    }

    return url;
  }

  get linkTarget(): string {
    const { linkOptions: { target } = {} } = this.config;
    return target ? target : '_self';
  }

  get isEditable(): boolean {
    const {editorType, visibleEditorHandler = DEFAULT_VISIBLE_EDITOR_HANDLER} = this.config;
    return Boolean(editorType) && visibleEditorHandler(this.item);
  }

  get isEmptyTemplate(): boolean {
    // TODO should show default value if slot "template" is empty
    const { nativeElement } = this.contentRef || {};
    return !(nativeElement && nativeElement.innerText);
  }

  ngOnInit(): void {
    const { key } = this.config;
    const keyList = key.split(STRING.DOT);
    this.form.addControl(...this.setFormControl(keyList));
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  setEditor(): void {
    if (!this.isEditable) {
      return;
    }

    const field = new EditorBuilder({
      ...this.config,
      onLeave: this.onLeave.bind(this),
    });
    this.fields.push(field);
  }

  private onLeave(): void {
    const { key } = this.config;
    const { value } = this.form;

    if (this._tableCell.getValue(value, key) !== this.fieldData) {
      const item = set(clone(this.item), key, this._tableCell.getValue(value, key));
      this.update.emit({item, key});
    }

    this.fields = [];
  }

  private setFormControl([firstKey, ...keys]: string[]): [string, AbstractControl] {
    if (!keys.length) return [firstKey, this.fb.control(this.fieldData)];

    const [newKey, control] = this.setFormControl(keys);
    return [firstKey, this.fb.group({[newKey]: control})];
  }
}

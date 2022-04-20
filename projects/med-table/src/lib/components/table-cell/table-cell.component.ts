import {FormControl, FormGroup} from '@angular/forms';
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

import {EditorBuilder} from './editor-builder';
import {CELL_TYPES} from '../../types/cellTypes';
import {TableCell} from '../../services/TableCell';
import {MedTableColumnConfig} from '../../types/MedTableColumnConfig';
import {MedUpdateColumnEvent} from '../../types/MedUpdateColumnEvent';
import {STRING} from "../../constants/string";

const DEFAULT_VISIBLE_EDITOR_HANDLER = () => true;

@Component({
  selector: 'table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.scss']
})
export class TableCellComponent<ItemType extends Record<string, any>> implements OnInit, AfterViewInit {
  constructor(private cd: ChangeDetectorRef) {}

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
    this.form.addControl(key, new FormControl(this.fieldData));
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

  onLeave(): void {
    const { key } = this.config;
    const { value } = this.form;

    if (this._tableCell.getValue(value, key) !== this.fieldData) {
      this.update.emit({item: {...this.item, ...value}, key});
    }

    this.fields = [];
  }
}

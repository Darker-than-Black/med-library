import { FormGroup, FormControl } from '@angular/forms';
import { MedFormFieldConfig } from 'med-dynamic-form';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
  Output,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';

import { EditorBuilder } from './editor-builder';
import { TableCell } from '../../services/TableCell';
import { MedTableColumnConfig } from '../../types/MedTableColumnConfig';
import { MedUpdateColumnEvent } from '../../types/MedUpdateColumnEvent';

const DEFAULT_VISIBLE_EDITOR_HANDLER = () => true;

@Component({
  selector: 'table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent<ItemType extends Record<string, any>> implements OnInit, AfterViewInit {
  constructor(private cd: ChangeDetectorRef) {}

  private _item: ItemType | {} = {};
  private _config: MedTableColumnConfig = {key: '', label: ''};
  private _tableCell = new TableCell<ItemType>();

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

  fields: MedFormFieldConfig[] = [];
  form: any = new FormGroup({});

  get fieldData(): string {
    return this._tableCell.fieldData;
  }

  get previewData(): string {
    return this._tableCell.previewData;
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

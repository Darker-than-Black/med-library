import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHeadCellComponent } from './table-head-cell.component';

describe('TableHeadCellComponent', () => {
  let component: TableHeadCellComponent;
  let fixture: ComponentFixture<TableHeadCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableHeadCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableHeadCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

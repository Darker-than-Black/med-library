import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableJsonParseComponent } from './table-json-parse.component';

describe('TableJsonParseComponent', () => {
  let component: TableJsonParseComponent;
  let fixture: ComponentFixture<TableJsonParseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableJsonParseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableJsonParseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedTableComponent } from './med-table.component';

describe('MedTableComponent', () => {
  let component: MedTableComponent<any>;
  let fixture: ComponentFixture<MedTableComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

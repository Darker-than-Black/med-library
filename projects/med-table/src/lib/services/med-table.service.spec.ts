import { TestBed } from '@angular/core/testing';

import { MedTableService } from './med-table.service';

describe('MedTableService', () => {
  let service: MedTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

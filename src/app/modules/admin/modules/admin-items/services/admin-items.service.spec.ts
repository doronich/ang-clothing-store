import { TestBed } from '@angular/core/testing';

import { AdminItemsService } from './admin-items.service';

describe('AdminItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminItemsService = TestBed.get(AdminItemsService);
    expect(service).toBeTruthy();
  });
});

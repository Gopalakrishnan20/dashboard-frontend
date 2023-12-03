import { TestBed } from '@angular/core/testing';

import { DashboardContentsService } from './dashboard-contents.service';

describe('DashboardContentsService', () => {
  let service: DashboardContentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardContentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

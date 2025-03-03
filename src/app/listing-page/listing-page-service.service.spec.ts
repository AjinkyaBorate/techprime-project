import { TestBed } from '@angular/core/testing';

import { ListingPageServiceService } from './listing-page-service.service';

describe('ListingPageServiceService', () => {
  let service: ListingPageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListingPageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

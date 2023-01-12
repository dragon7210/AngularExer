import { TestBed } from '@angular/core/testing';

import { HeaderServiecService } from './header-serviec.service';

describe('HeaderServiecService', () => {
  let service: HeaderServiecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderServiecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { LibTurboComponentsScdService } from './lib-turbo-components-scd.service';

describe('LibTurboComponentsScdService', () => {
  let service: LibTurboComponentsScdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibTurboComponentsScdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

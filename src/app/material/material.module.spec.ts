import { TestBed } from '@angular/core/testing';

import { MaterialModule } from './material.module';

describe('MaterialModule', () => {
  let service: MaterialModule;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialModule);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

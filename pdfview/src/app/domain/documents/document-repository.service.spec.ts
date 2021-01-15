import { TestBed } from '@angular/core/testing';

import { DocumentRepositoryService } from './document-repository.service';

describe('DocumentRepositoryService', () => {
  let service: DocumentRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

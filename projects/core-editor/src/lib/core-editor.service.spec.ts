import { TestBed } from '@angular/core/testing';

import { CoreEditorService } from './core-editor.service';

describe('CoreEditorService', () => {
  let service: CoreEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

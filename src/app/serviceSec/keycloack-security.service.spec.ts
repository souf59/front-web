import { TestBed } from '@angular/core/testing';

import { KeycloackSecurityService } from './keycloack-security.service';

describe('KeycloackSecurityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeycloackSecurityService = TestBed.get(KeycloackSecurityService);
    expect(service).toBeTruthy();
  });
});

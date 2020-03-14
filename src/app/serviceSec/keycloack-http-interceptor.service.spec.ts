import { TestBed } from '@angular/core/testing';

import { KeycloackHttpInterceptorService } from './keycloack-http-interceptor.service';

describe('KeycloackHttpInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeycloackHttpInterceptorService = TestBed.get(KeycloackHttpInterceptorService);
    expect(service).toBeTruthy();
  });
});

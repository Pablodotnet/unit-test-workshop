import { TestBed } from '@angular/core/testing';

import { PokemonAbstractionService } from './pokemon-abstraction.service';

describe('PokemonAbstractionService', () => {
  let service: PokemonAbstractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonAbstractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

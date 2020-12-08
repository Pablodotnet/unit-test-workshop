import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PokemonAbstractionService } from './pokemon-abstraction.service';

describe('PokemonAbstractionService', () => {
  let service: PokemonAbstractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ]
    });
    service = TestBed.inject(PokemonAbstractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have three methods defined', () => {
    expect(service.getAllPokemon).toBeDefined();
    expect(service.getPokemonById).toBeDefined();
    expect(service.getPokemonEncounterLocations).toBeDefined();
  });

  describe('getAllPokemon', () => {
    it('should return value from observable', (done: DoneFn) => {
      service.getAllPokemon().subscribe(value => {
        expect(value).toBeDefined();
        expect(value.count).toBeDefined();
        done();
      });
    });
  });

  describe('getPokemonById', () => {
    it('should return value from observable', (done: DoneFn) => {
      service.getPokemonById(10).subscribe(value => {
        expect(value).toBeDefined();
        expect(value.abilities).toBeDefined();
        done();
      });
    });
  });

  describe('getPokemonEncounterLocations', () => {
    it('should return value from observable', (done: DoneFn) => {
      const url = 'https://pokeapi.co/api/v2/pokemon/1/encounters';
      service.getPokemonEncounterLocations(url).subscribe(value => {
        expect(value).toBeDefined();
        expect(value.length).toBeGreaterThan(0);
        done();
      });
    });
  });
});

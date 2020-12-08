import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { PokemonAbstractionService } from '@api/pokemon-abstraction.service';
import { PokemonAbstractionServiceStub } from '@api/pokemon-abstraction.stub.service';
import { MockEncounterLocations, MockPokemon } from '@mocks/PokemonList';
import { of } from 'rxjs';

import { PokemonService } from './pokemon.service';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [
        { provide: PokemonAbstractionService, useClass: PokemonAbstractionServiceStub }
      ]
    });
    service = TestBed.inject(PokemonService);
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
    it('should call getAllPokemon from pokemonApi', () => {
      const mockResponse = {
        count: 0,
        next: '',
        previous: '',
        results: [{ name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }],
      };
      spyOn(PokemonAbstractionServiceStub.prototype, 'getAllPokemon').and.returnValue(of(mockResponse));
      service.getAllPokemon();
      expect(PokemonAbstractionServiceStub.prototype.getAllPokemon).toHaveBeenCalled();
    });

    it('should return value from observable', (done: DoneFn) => {
      const mockResponse = {
        count: 0,
        next: '',
        previous: '',
        results: [{ name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }],
      };
      spyOn(PokemonAbstractionServiceStub.prototype, 'getAllPokemon').and.returnValue(of(mockResponse));
      service.getAllPokemon().subscribe(value => {
        expect(value).toBeDefined();
        expect(value.length).toEqual(1);
        expect(value[0].name).toBeDefined();
        expect(value[0].name).toEqual('bulbasaur');
        done();
      });
    });
  });

  describe('getPokemonById', () => {
    it('should call getPokemonById from pokemonApi', () => {
      spyOn(PokemonAbstractionServiceStub.prototype, 'getPokemonById').and.returnValue(of(MockPokemon));
      service.getPokemonById(10);
      expect(PokemonAbstractionServiceStub.prototype.getPokemonById).toHaveBeenCalledWith(10);
    });

    it('should return value from observable', (done: DoneFn) => {
      spyOn(PokemonAbstractionServiceStub.prototype, 'getPokemonById').and.returnValue(of(MockPokemon));
      service.getPokemonById(10).subscribe(value => {
        expect(value).toBeDefined();
        expect(value.id).toEqual(12);
        expect(value.name).toBeDefined();
        expect(value.name).toEqual('butterfree');
        done();
      });
    });
  });

  describe('getPokemonEncounterLocations', () => {
    it('should call getPokemonEncounterLocations from pokemonApi', () => {
      spyOn(PokemonAbstractionServiceStub.prototype, 'getPokemonEncounterLocations').and.returnValue(of(MockPokemon));
      const url = 'https://pokeapi.co/api/v2/pokemon/12/encounters';
      service.getPokemonEncounterLocations(url);
      expect(PokemonAbstractionServiceStub.prototype.getPokemonEncounterLocations).toHaveBeenCalledWith(url);
    });

    it('should return value from observable', (done: DoneFn) => {
      spyOn(PokemonAbstractionServiceStub.prototype, 'getPokemonEncounterLocations').and.returnValue(of(MockEncounterLocations));
      const url = 'https://pokeapi.co/api/v2/pokemon/12/encounters';
      service.getPokemonEncounterLocations(url).subscribe(value => {
        expect(value).toBeDefined();
        done();
      });
    });
  });
});

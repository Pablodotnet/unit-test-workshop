import { Injectable } from '@angular/core';
import { Pokemon, PokemonResponse } from '@interfaces/Pokemon';
import { MockEncounterLocations, MockPokemon, MockPokemonList } from '@mocks/PokemonList';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonAbstractionServiceStub {

  constructor() { }

  getAllPokemon(): Observable<PokemonResponse> {
    const mockResponse = {
      count: 0,
      next: '',
      previous: '',
      results: [],
    };
    return of(mockResponse);
  }

  getPokemonById(pokemonId: number): Observable<Pokemon> {
    return of(MockPokemon);
  }

  getPokemonEncounterLocations(encountersUrl: string): Observable<any> {
    return of(MockEncounterLocations);
  }
}

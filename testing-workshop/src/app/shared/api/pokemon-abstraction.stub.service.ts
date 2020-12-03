import { Injectable } from '@angular/core';
import { Pokemon } from '@interfaces/Pokemon';
import { MockEncounterLocations, MockPokemon, MockPokemonList } from '@mocks/PokemonList';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonAbstractionServiceStub {

  constructor() { }

  getAllPokemon(): Observable<Pokemon[]> {
    return of(MockPokemonList);
  }

  getPokemonByUrl(pokemonUrl: number): Observable<Pokemon> {
    return of(MockPokemon);
  }

  getPokemonById(pokemonId: number): Observable<Pokemon> {
    return of(MockPokemon);
  }

  getPokemonEncounterLocations(encountersUrl: string): Observable<any> {
    return of(MockEncounterLocations);
  }
}

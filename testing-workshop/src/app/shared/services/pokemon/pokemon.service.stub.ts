import { Injectable } from '@angular/core';
import { PokemonAbstractionServiceStub } from '@api/pokemon-abstraction.stub.service';
import { Pokemon, ShortPokemonType } from '@interfaces/Pokemon';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceStub {

  constructor(
    private pokemonApi: PokemonAbstractionServiceStub
  ) { }

  getAllPokemon(): Observable<ShortPokemonType[]> {
    return this.pokemonApi.getAllPokemon().pipe(
      map(response => response.results)
    );
  }

  getPokemonById(id: number): Observable<Pokemon> {
    return this.pokemonApi.getPokemonById(id);
  }

  getPokemonByUrl(url: string): Observable<Pokemon> {
    return this.pokemonApi.getPokemonByUrl(url);
  }

  getPokemonEncounterLocations(url: string): Observable<any> {
    return this.pokemonApi.getPokemonEncounterLocations(url);
  }
}

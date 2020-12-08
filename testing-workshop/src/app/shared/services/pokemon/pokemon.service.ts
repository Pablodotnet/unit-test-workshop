import { Injectable } from '@angular/core';
import { PokemonAbstractionService } from '@api/pokemon-abstraction.service';
import { Pokemon, ShortPokemonType } from '@interfaces/Pokemon';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private pokemonApi: PokemonAbstractionService
  ) { }

  getAllPokemon(): Observable<ShortPokemonType[]> {
    return this.pokemonApi.getAllPokemon().pipe(
      map(response => response.results)
    );
  }

  getPokemonById(id: number): Observable<Pokemon> {
    return this.pokemonApi.getPokemonById(id);
  }

  getPokemonEncounterLocations(url: string): Observable<any> {
    return this.pokemonApi.getPokemonEncounterLocations(url);
  }
}

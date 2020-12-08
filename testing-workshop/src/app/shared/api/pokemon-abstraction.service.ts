import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon, PokemonResponse } from '@interfaces/Pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonAbstractionService {

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(
    private http: HttpClient
  ) { }

  getAllPokemon(): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(this.apiUrl);
  }

  getPokemonById(pokemonId: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrl}/${pokemonId}`);
  }

  getPokemonEncounterLocations(encountersUrl: string): Observable<any> {
    return this.http.get<any>(`${encountersUrl}`);
  }
}

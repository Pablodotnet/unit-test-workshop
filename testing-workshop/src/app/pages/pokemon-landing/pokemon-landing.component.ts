import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShortPokemonType } from '@interfaces/Pokemon';
import { PokemonService } from '@services/pokemon/pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-landing',
  templateUrl: './pokemon-landing.component.html',
  styleUrls: ['./pokemon-landing.component.scss']
})
export class PokemonLandingComponent implements OnInit {

  pokemonList$: Observable<ShortPokemonType[]>;

  constructor(
    private pokemonService: PokemonService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getPokemonList();
  }

  getPokemonList() {
    this.pokemonList$ = this.pokemonService.getAllPokemon();
  }

  handleSelected($event: { value: string; selected: boolean; name: string; }) {
    if (!!$event && !!$event.value) {
      const pokemonId = $event.value.split('/pokemon/')[1].split('/')[0];
      this.router.navigateByUrl(`/pokemon/${pokemonId}`);
    }
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { PokemonService } from '@services/pokemon/pokemon.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  pokemonAvailableOptions = [];

  selectedPokemon = 'rattata';

  constructor(
    private pokemonService: PokemonService,
  ) { }

  ngOnInit(): void {
    this.getPokemonOptions();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getPokemonOptions() {
    this.subscription.add(
      this.pokemonService.getAllPokemon().subscribe(
        response => this.pokemonAvailableOptions = this.generatePokemonOptions(response),
        error => console.error(error)
      )
    );
  }

  handleInputValueSelection($event, index) {
    console.log('$event: ', $event, index);
  }

  generatePokemonOptions(pokemonList) {
    return pokemonList.map(({ name }) => ({
      content: name,
      value: name,
      selected: false,
    }));
  }

}

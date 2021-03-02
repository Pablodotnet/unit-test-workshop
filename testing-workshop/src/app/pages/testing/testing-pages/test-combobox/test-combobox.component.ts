import { Component, OnDestroy, OnInit } from '@angular/core';
import { PokemonService } from '@services/pokemon/pokemon.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-test-combobox',
  templateUrl: './test-combobox.component.html',
  styleUrls: ['./test-combobox.component.scss']
})
export class TestComboboxComponent implements OnInit, OnDestroy {
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
        response => this.setPokemonOptions(response),
        error => console.error(error)
      )
    );
  }

  setPokemonOptions(options) {
    this.pokemonAvailableOptions = this.generatePokemonOptions(options);
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

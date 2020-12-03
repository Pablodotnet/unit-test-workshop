import { Component, Injector, Input, OnInit } from '@angular/core';
import { PokemonService } from '@services/pokemon/pokemon.service';
import { BaseModal } from 'carbon-components-angular/modal';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-locations-modal',
  templateUrl: './pokemon-locations-modal.component.html',
  styleUrls: ['./pokemon-locations-modal.component.scss']
})
export class PokemonLocationsModalComponent extends BaseModal implements OnInit {

  encounterLocations$: Observable<any>;

  @Input() locationsUrl: string;

  constructor(
    private injector: Injector,
    private pokemonService: PokemonService,
  ) {
    super();
    this.locationsUrl = this.injector.get<any>('locationsUrl' as any);
  }

  ngOnInit(): void {
    if (!!this.locationsUrl) {
      console.log('this.locationsUrl: ', this.locationsUrl);
      this.encounterLocations$ = this.pokemonService.getPokemonEncounterLocations(this.locationsUrl);
    }
  }

}

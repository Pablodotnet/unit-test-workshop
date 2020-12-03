import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '@interfaces/Pokemon';
import { PokemonService } from '@services/pokemon/pokemon.service';
import { ModalService } from 'carbon-components-angular/modal';
import { Observable } from 'rxjs';
import {
  PokemonLocationsModalComponent
} from './components/pokemon-locations-modal/pokemon-locations-modal.component';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  pokemonId: number;
  pokemon$: Observable<Pokemon>;
  spritesList = [
    'front_default', 'back_default',
    'front_shiny', 'back_shiny',
    'front_female', 'back_female',
    'front_shiny_female', 'back_shiny_female',
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService,
    private modalService: ModalService,
  ) { }

  ngOnInit(): void {
    this.pokemonId = +this.activatedRoute.snapshot.paramMap.get('id');
    this.pokemon$ = this.pokemonService.getPokemonById(this.pokemonId);
  }

  handleOpenLocationsModal(locationsUrl) {
    this.modalService.create({
      component: PokemonLocationsModalComponent,
      inputs: {
        locationsUrl
      }
    });
  }

  handleReturnToLanding() {
    this.router.navigateByUrl('/');
  }

}

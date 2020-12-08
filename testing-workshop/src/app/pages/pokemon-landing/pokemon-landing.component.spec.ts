import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { TilesModule } from 'carbon-components-angular';

import { PokemonService } from '@services/pokemon/pokemon.service';
import { PokemonServiceStub } from '@services/pokemon/pokemon.service.stub';

import { routerSpy } from '@spies/RouterSpy';

import { PokemonLandingComponent } from './pokemon-landing.component';
import { of } from 'rxjs';

describe('PokemonLandingComponent', () => {
  let component: PokemonLandingComponent;
  let fixture: ComponentFixture<PokemonLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonLandingComponent ],
      imports: [
        TilesModule
      ],
      providers: [
        { provide: PokemonService, useClass: PokemonServiceStub },
        { provide: Router, useValue: routerSpy },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Controller', () => {
    it('should trigger getPokemonList at init', () => {
      spyOn(component, 'getPokemonList').calls.reset();
      component.ngOnInit();
      expect(component.getPokemonList).toHaveBeenCalled();
    });

    it('should define pokemonList observable', () => {
      expect(component.pokemonList$).toBeDefined();
    });

    describe('getPokemonList', () => {
      it('should call getAllPokemon from pokemonService when triggered', () => {
        const mockResponse = {
          count: 0,
          next: '',
          previous: '',
          results: [{ name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }],
        };
        spyOn(PokemonServiceStub.prototype, 'getAllPokemon').and.returnValue(of(mockResponse.results));
        component.getPokemonList();
        expect(PokemonServiceStub.prototype.getAllPokemon).toHaveBeenCalled();
      });
    });

    describe('handleSelected', () => {
      it('should not call router.navigateByUrl when event is not defined', () => {
        routerSpy.navigateByUrl.calls.reset();
        component.handleSelected(null);
        expect(routerSpy.navigateByUrl).not.toHaveBeenCalled();
      });

      it('should not call router.navigateByUrl when event does not have value', () => {
        routerSpy.navigateByUrl.calls.reset();
        const mockEvent = { value: '', selected: false, name: 'bulbasaur' };
        component.handleSelected(mockEvent);
        expect(routerSpy.navigateByUrl).not.toHaveBeenCalled();
      });

      it('should call router.navigateByUrl when event is defined and have value field', () => {
        routerSpy.navigateByUrl.calls.reset();
        const mockEvent = { value: 'https://pokeapi.co/api/v2/pokemon/1/', selected: false, name: 'bulbasaur' };
        component.handleSelected(mockEvent);
        expect(routerSpy.navigateByUrl).toHaveBeenCalled();
      });
    });
  });

  describe('Template', () => {});
});

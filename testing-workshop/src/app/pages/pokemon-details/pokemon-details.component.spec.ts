import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';

import {
  ButtonModule,
  GridModule,
  ListModule,
  ModalService
} from 'carbon-components-angular';

import { PokemonService } from '@services/pokemon/pokemon.service';
import { PokemonServiceStub } from '@services/pokemon/pokemon.service.stub';

import { routerSpy } from '@spies/RouterSpy';
import { modalServiceSpy } from '@spies/ModalServiceSpy';
import { activatedRouteSpy } from '@spies/ActivatedRouteSpy';

import { PokemonDetailsComponent } from './pokemon-details.component';
import { PokemonLocationsModalComponent } from './components/pokemon-locations-modal/pokemon-locations-modal.component';
import { By } from '@angular/platform-browser';

describe('PokemonDetailsComponent', () => {
  let component: PokemonDetailsComponent;
  let fixture: ComponentFixture<PokemonDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonDetailsComponent ],
      imports: [
        GridModule,
        ListModule,
        ButtonModule,
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteSpy },
        { provide: Router, useValue: routerSpy },
        { provide: PokemonService, useClass: PokemonServiceStub },
        { provide: ModalService, useValue: modalServiceSpy },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Controller', () => {
    it('should define pokemonId as 10 at init', () => {
      expect(component.pokemonId).toEqual(10);
    });

    it('should define the pokemon observable at init', () => {
      expect(component.pokemon$).toBeDefined();
    });

    it('should have 8 elements on spritesList array at init', () => {
      expect(component.spritesList.length).toEqual(8);
    });

    describe('handleOpenLocationsModal', () => {
      it('should call modalService.create when triggered', () => {
        modalServiceSpy.create.calls.reset();
        const expectedModalObj = {
          component: PokemonLocationsModalComponent,
          inputs: {
            locationsUrl: 'someurl'
          }
        };
        component.handleOpenLocationsModal('someurl');
        expect(modalServiceSpy.create).toHaveBeenCalledWith(expectedModalObj);
      });
    });

    describe('handleReturnToLanding', () => {
      it('should call router.navigateByUrl to home page', () => {
        routerSpy.navigateByUrl.calls.reset();
        component.handleReturnToLanding();
        expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('/');
      });
    });
  });

  describe('Template', () => {
    it('should display the pokemon name', () => {
      const html = fixture.debugElement;
      const pokemonTitle = html.query(By.css('.pokemon-name-container h2'));
      expect(pokemonTitle.nativeElement.innerText).toEqual('BUTTERFREE');
    });

    it('should have a container for two cards', () => {
      const html = fixture.debugElement;
      const detailsContainer = html.query(By.css('.pokemon-details-container'));
      expect(detailsContainer).toBeDefined();
    });

    it('should have two cards displayed', () => {
      const html = fixture.debugElement;
      const cards = html.queryAll(By.css('.card'));
      expect(cards.length).toEqual(2);
    });

    it('should display the pokemon pictures card', () => {
      const html = fixture.debugElement;
      const pokePicturesCard = html.query(By.css('.pokemon-pictures-card-container .card'));
      expect(pokePicturesCard).toBeDefined();
    });

    it('should display the pictures card title', () => {
      const html = fixture.debugElement;
      const pokePicturesCardTitle = html.query(By.css('.pokemon-pictures-card-container .card h3'));
      expect(pokePicturesCardTitle.nativeElement.innerText).toEqual('Pictures');
    });

    it('should display the pokemon pictures because spritesList array is defined', () => {
      const html = fixture.debugElement;
      const pokemonPictures = html.queryAll(By.css('.pokemon-picture-container'));
      expect(pokemonPictures.length).toEqual(8);
    });

    it('should display the pokemon data card', () => {
      const html = fixture.debugElement;
      const pokeDataCard = html.query(By.css('.pokemon-data-card-container .card'));
      expect(pokeDataCard).toBeDefined();
    });

    it('should display the pokemon id', () => {
      const html = fixture.debugElement;
      const pokemonId = html.query(By.css('.pokemon-data-card-container .card h4.pokemon-id'));
      expect(pokemonId.nativeElement.innerText).toEqual('Pokemon Id: 12');
    });

    it('should display the game indices container', () => {
      const html = fixture.debugElement;
      const gameIndicesListContainer = html.query(By.css('.pokemon-game-indices-list-container'));
      expect(gameIndicesListContainer).toBeDefined();
    });

    it('should display the game indices counter', () => {
      const html = fixture.debugElement;
      const gameIndicesCounter = html.query(By.css('.pokemon-game-indices-list-container h4'));
      expect(gameIndicesCounter.nativeElement.innerText).toEqual('Games where it appears: 1');
    });

    it('should display the game indices list', () => {
      const html = fixture.debugElement;
      const gameIndicesList = html.query(By.css('.pokemon-game-indices-list'));
      const gameIndicesListItems = html.queryAll(By.css('.pokemon-game-indices-list li'));
      expect(gameIndicesList).toBeDefined();
      expect(gameIndicesListItems.length).toEqual(1);
      expect(gameIndicesListItems[0].nativeElement.innerText).toEqual('WHITE-2');
    });
  });
});

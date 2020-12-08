import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockEncounterLocations } from '@mocks/PokemonList';
import { PokemonService } from '@services/pokemon/pokemon.service';
import { PokemonServiceStub } from '@services/pokemon/pokemon.service.stub';

import { ListModule, ModalModule } from 'carbon-components-angular';
import { of } from 'rxjs';

import { PokemonLocationsModalComponent } from './pokemon-locations-modal.component';

describe('PokemonLocationsModalComponent Failure Scenarios', () => {
  let component: PokemonLocationsModalComponent;
  let fixture: ComponentFixture<PokemonLocationsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonLocationsModalComponent ],
      imports: [
        HttpClientModule,
        ModalModule,
        ListModule,
      ],
      providers: [
        { provide: PokemonService, useClass: PokemonServiceStub },
        { provide: 'locationsUrl', useValue: null },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonLocationsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should not call getPokemonEncounterLocations from service at init if locationsUrl is undefined', () => {
    spyOn(PokemonServiceStub.prototype, 'getPokemonEncounterLocations').and.returnValue(of(MockEncounterLocations));
    component.ngOnInit();
    expect(PokemonServiceStub.prototype.getPokemonEncounterLocations).not.toHaveBeenCalled();
  });
});

describe('PokemonLocationsModalComponent', () => {
  let component: PokemonLocationsModalComponent;
  let fixture: ComponentFixture<PokemonLocationsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonLocationsModalComponent ],
      imports: [
        HttpClientModule,
        ModalModule,
        ListModule,
      ],
      providers: [
        { provide: PokemonService, useClass: PokemonServiceStub },
        { provide: 'locationsUrl', useValue: 'https://pokeapi.co/api/v2/pokemon/12/encounters' },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonLocationsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Controller', () => {
    it('should have locationsUrl defined', () => {
      expect(component.locationsUrl).toBeDefined();
      expect(component.locationsUrl).toEqual('https://pokeapi.co/api/v2/pokemon/12/encounters');
    });

    it('should define encounterLocations observable at init because locationsUrl is defined', () => {
      expect(component.encounterLocations$).toBeDefined();
    });

    it('should call getPokemonEncounterLocations from pokemonService at init because locationsUrl is defined', () => {
      spyOn(PokemonServiceStub.prototype, 'getPokemonEncounterLocations').and.returnValue(of(MockEncounterLocations));
      component.ngOnInit();
      expect(
        PokemonServiceStub.prototype.getPokemonEncounterLocations
      ).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/12/encounters');
    });
  });

  describe('Template', () => {});

});

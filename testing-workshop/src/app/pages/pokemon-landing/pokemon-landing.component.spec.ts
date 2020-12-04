import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { TilesModule } from 'carbon-components-angular';

import { PokemonService } from '@services/pokemon/pokemon.service';
import { PokemonServiceStub } from '@services/pokemon/pokemon.service.stub';

import { routerSpy } from '@spies/RouterSpy';

import { PokemonLandingComponent } from './pokemon-landing.component';

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
});

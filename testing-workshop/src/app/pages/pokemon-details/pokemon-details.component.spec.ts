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
});

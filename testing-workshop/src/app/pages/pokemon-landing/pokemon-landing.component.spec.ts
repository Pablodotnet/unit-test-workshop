import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonLandingComponent } from './pokemon-landing.component';

describe('PokemonLandingComponent', () => {
  let component: PokemonLandingComponent;
  let fixture: ComponentFixture<PokemonLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonLandingComponent ]
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

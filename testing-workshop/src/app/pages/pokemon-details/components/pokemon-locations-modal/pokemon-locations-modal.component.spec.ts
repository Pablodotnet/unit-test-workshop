import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonLocationsModalComponent } from './pokemon-locations-modal.component';

describe('PokemonLocationsModalComponent', () => {
  let component: PokemonLocationsModalComponent;
  let fixture: ComponentFixture<PokemonLocationsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonLocationsModalComponent ]
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
});

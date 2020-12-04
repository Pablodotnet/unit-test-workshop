import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListModule, ModalModule } from 'carbon-components-angular';

import { PokemonLocationsModalComponent } from './pokemon-locations-modal.component';

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
});

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core.module';
import {
  ButtonModule,
  GridModule,
  ListModule,
  PlaceholderModule,
  PlaceholderService,
  TilesModule
} from 'carbon-components-angular';
import { ModalModule, ModalService } from 'carbon-components-angular/modal';
import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';
import { PokemonLandingComponent } from './pages/pokemon-landing/pokemon-landing.component';
import {
  PokemonLocationsModalComponent
} from './pages/pokemon-details/components/pokemon-locations-modal/pokemon-locations-modal.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PokemonDetailsComponent,
    PokemonLandingComponent,
    PokemonLocationsModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    TilesModule,
    GridModule,
    ListModule,
    ButtonModule,
    PlaceholderModule,
    ModalModule,
  ],
  providers: [
    ModalService,
    PlaceholderService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

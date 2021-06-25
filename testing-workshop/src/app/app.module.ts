import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  ButtonModule,
  ComboBoxModule,
  GridModule,
  ListModule,
  LoadingModule,
  PlaceholderModule,
  PlaceholderService,
  TableModule,
  TilesModule
} from 'carbon-components-angular';
import { ModalModule, ModalService } from 'carbon-components-angular/modal';
import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';
import { PokemonLandingComponent } from './pages/pokemon-landing/pokemon-landing.component';
import {
  PokemonLocationsModalComponent
} from './pages/pokemon-details/components/pokemon-locations-modal/pokemon-locations-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { TablesComponent } from './pages/tables/tables.component';
import { TagInputComponent } from './pages/tag-input-container/tag-input/tag-input.component';
import { TagInputContainerComponent } from './pages/tag-input-container/tag-input-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PokemonDetailsComponent,
    PokemonLandingComponent,
    PokemonLocationsModalComponent,
    TablesComponent,
    TagInputComponent,
    TagInputContainerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    // Carbon modules
    TilesModule,
    GridModule,
    ListModule,
    ButtonModule,
    PlaceholderModule,
    ModalModule,
    ComboBoxModule,
    TableModule,
    LoadingModule,
  ],
  providers: [
    ModalService,
    PlaceholderService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

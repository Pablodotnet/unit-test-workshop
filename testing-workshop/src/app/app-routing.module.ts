import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonLandingComponent } from './pages/pokemon-landing/pokemon-landing.component';
import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';
import { TestingComponent } from './pages/testing/testing.component';
import { TablesComponent } from './pages/tables/tables.component';

const routes: Routes = [
  {
    path: 'landing',
    component: PokemonLandingComponent
  },
  {
    path: 'pokemon/:id',
    component: PokemonDetailsComponent
  },
  {
    path: 'tables',
    component: TablesComponent
  },
  {
    path: '',
    component: TestingComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
